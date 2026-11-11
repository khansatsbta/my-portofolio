const ALLOWED_SOURCES = ['cv', 'linkedin', 'github', 'referral', 'other'];

function getRedisConfig() {
  const url = (
    process.env.UPSTASH_REDIS_REST_KV_REST_API_URL ||
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.KV_REST_API_URL ||
    ''
  ).replace(/\/$/, '');

  const token =
    process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN ||
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.KV_REST_API_TOKEN ||
    '';

  return { url, token, configured: Boolean(url && token) };
}

function sendJson(res, status, payload) {
  if (typeof res.status === 'function' && typeof res.json === 'function') {
    return res.status(status).json(payload);
  }
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
}

async function parseJsonBody(req) {
  if (req.body !== undefined) {
    if (typeof req.body === 'string') {
      return req.body ? JSON.parse(req.body) : {};
    }
    return req.body || {};
  }

  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
    });
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

async function runRedisPipeline(url, token, commands) {
  const response = await fetch(`${url}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commands),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Upstash error (${response.status}): ${errText}`);
  }

  return response.json();
}

function normalizeHashResult(rawResult) {
  const map = {};
  if (Array.isArray(rawResult)) {
    for (let i = 0; i < rawResult.length; i += 2) {
      map[rawResult[i]] = Number(rawResult[i + 1]) || 0;
    }
  } else if (rawResult && typeof rawResult === 'object') {
    for (const [k, v] of Object.entries(rawResult)) {
      map[k] = Number(v) || 0;
    }
  }
  return map;
}

export default async function handler(req, res) {
  const { url, token, configured } = getRedisConfig();

  if (req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const source = String(body.source || '').toLowerCase().trim();

      if (!ALLOWED_SOURCES.includes(source)) {
        return sendJson(res, 400, { error: 'Invalid survey source option.' });
      }

      const otherText =
        source === 'other' ? String(body.otherText || '').trim().slice(0, 120) : '';

      if (source === 'other' && !otherText) {
        return sendJson(res, 400, { error: 'Please specify where you found this link.' });
      }

      if (!configured) {
        return sendJson(res, 200, { ok: true, configured: false });
      }

      const entry = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        source,
        otherText,
        referrer: String(body.referrer || '').trim().slice(0, 200),
        timestamp: new Date().toISOString(),
      };

      await runRedisPipeline(url, token, [
        ['HINCRBY', 'portfolio:survey:counts', source, 1],
        ['INCR', 'portfolio:survey:total'],
        ['LPUSH', 'portfolio:survey:recent', JSON.stringify(entry)],
        ['LTRIM', 'portfolio:survey:recent', 0, 99],
      ]);

      return sendJson(res, 200, { ok: true, configured: true });
    } catch (error) {
      return sendJson(res, 500, { error: error.message || 'Failed to save response.' });
    }
  }

  if (req.method === 'GET') {
    try {
      const parsedUrl = new URL(req.url || '/', 'http://localhost');
      const providedKey = req.query?.key ?? parsedUrl.searchParams.get('key') ?? '';
      const requiredKey = process.env.SURVEY_STATS_KEY || '';

      if (requiredKey && providedKey !== requiredKey) {
        return sendJson(res, 401, { error: 'Invalid stats access key.', requiresKey: true });
      }

      if (!configured) {
        return sendJson(res, 200, {
          configured: false,
          total: 0,
          counts: { cv: 0, linkedin: 0, github: 0, referral: 0, other: 0 },
          recent: [],
        });
      }

      const pipelineRes = await runRedisPipeline(url, token, [
        ['HGETALL', 'portfolio:survey:counts'],
        ['GET', 'portfolio:survey:total'],
        ['LRANGE', 'portfolio:survey:recent', 0, 49],
      ]);

      const countsMap = normalizeHashResult(pipelineRes?.[0]?.result);
      const counts = {
        cv: countsMap.cv || 0,
        linkedin: countsMap.linkedin || 0,
        github: countsMap.github || 0,
        referral: countsMap.referral || 0,
        other: countsMap.other || 0,
      };

      const computedSum = Object.values(counts).reduce((acc, n) => acc + n, 0);
      const total = Math.max(Number(pipelineRes?.[1]?.result) || 0, computedSum);

      const rawRecent = Array.isArray(pipelineRes?.[2]?.result) ? pipelineRes[2].result : [];
      const recent = rawRecent
        .map((item) => {
          try {
            return typeof item === 'string' ? JSON.parse(item) : item;
          } catch {
            return null;
          }
        })
        .filter(Boolean);

      return sendJson(res, 200, {
        configured: true,
        total,
        counts,
        recent,
      });
    } catch (error) {
      return sendJson(res, 500, { error: error.message || 'Failed to load survey stats.' });
    }
  }

  return sendJson(res, 405, { error: 'Method not allowed.' });
}

