import React, { useState, useEffect, useCallback } from 'react';
import { TbX, TbRefresh, TbLock, TbRotateClockwise } from 'react-icons/tb';

const SOURCE_LABELS = {
    cv: 'CV / Resume',
    linkedin: 'LinkedIn',
    github: 'GitHub / GitLab',
    referral: 'Friend / Referral',
    other: 'Other',
};

const SurveyStatsModal = () => {
    const [isOpen, setIsOpen] = useState(() => {
        if (typeof window === 'undefined') return false;
        return new URLSearchParams(window.location.search).has('stats');
    });
    const [accessKey, setAccessKey] = useState(() => {
        if (typeof window === 'undefined') return '';
        return new URLSearchParams(window.location.search).get('stats') || '';
    });
    const [keyInput, setKeyInput] = useState('');
    const [requiresKey, setRequiresKey] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [stats, setStats] = useState(null);

    const fetchStats = useCallback(async (keyToUse) => {
        setLoading(true);
        setError('');
        try {
            const query = keyToUse ? `?key=${encodeURIComponent(keyToUse)}` : '';
            const res = await fetch(`/api/survey${query}`);
            const data = await res.json();

            if (res.status === 401) {
                setRequiresKey(true);
                setError(data.error || 'Access key required.');
                setLoading(false);
                return;
            }

            if (!res.ok) {
                throw new Error(data.error || 'Failed to load stats.');
            }

            setRequiresKey(false);
            setStats(data);
        } catch (err) {
            setError(err.message || 'Could not load survey stats.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!isOpen) return;
        const timer = setTimeout(() => {
            fetchStats(accessKey);
        }, 0);
        return () => clearTimeout(timer);
    }, [isOpen, accessKey, fetchStats]);

    if (!isOpen) return null;

    const handleClose = () => {
        const url = new URL(window.location.href);
        url.searchParams.delete('stats');
        window.history.replaceState({}, '', url.toString());
        setIsOpen(false);
    };

    const handleResetMySurvey = () => {
        try {
            localStorage.removeItem('khansa_portfolio_survey_v1');
        } catch {
            // Ignore
        }
        const url = new URL(window.location.href);
        url.searchParams.delete('stats');
        window.location.href = url.toString();
    };

    const handleUnlock = (e) => {
        e.preventDefault();
        setAccessKey(keyInput);
        fetchStats(keyInput);
    };

    const counts = stats?.counts || { cv: 0, linkedin: 0, github: 0, referral: 0, other: 0 };
    const total = stats?.total || 0;

    const sortedEntries = Object.entries(SOURCE_LABELS)
        .map(([id, label]) => ({
            id,
            label,
            count: counts[id] || 0,
            pct: total > 0 ? Math.round(((counts[id] || 0) / total) * 100) : 0,
        }))
        .sort((a, b) => b.count - a.count);

    const topSource = total > 0 ? sortedEntries[0] : null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="survey-stats-title"
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 3100,
                backgroundColor: 'rgba(18, 18, 18, 0.75)',
                backdropFilter: 'blur(6px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.25rem',
            }}
            onClick={handleClose}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '680px',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    backgroundColor: 'var(--bg-color)',
                    color: 'var(--text-primary)',
                    border: '2px solid var(--text-primary)',
                    borderRadius: '28px',
                    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.3)',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        marginBottom: '1.5rem',
                    }}
                >
                    <div>
                        <span
                            style={{
                                fontSize: '0.75rem',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '1.5px',
                                backgroundColor: 'var(--accent-color)',
                                padding: '4px 10px',
                                borderRadius: '100px',
                            }}
                        >
                            Portfolio Analytics
                        </span>
                        <h2
                            id="survey-stats-title"
                            style={{ fontSize: '2.2rem', fontWeight: 900, lineHeight: 1.1, marginTop: '0.5rem' }}
                        >
                            viewer{' '}
                            <span className="serif-text" style={{ fontWeight: 600 }}>
                                statistics.
                            </span>
                        </h2>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                            type="button"
                            onClick={() => fetchStats(accessKey)}
                            title="Refresh stats"
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                border: '1px solid var(--border-subtle)',
                                backgroundColor: '#ffffff',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <TbRefresh size={18} />
                        </button>
                        <button
                            type="button"
                            onClick={handleClose}
                            title="Close stats"
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                border: '1px solid var(--border-subtle)',
                                backgroundColor: '#ffffff',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <TbX size={18} />
                        </button>
                    </div>
                </div>

                {requiresKey ? (
                    <form onSubmit={handleUnlock} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
                            <TbLock size={20} />
                            <span>Enter your stats access key (SURVEY_STATS_KEY)</span>
                        </div>
                        <input
                            type="password"
                            value={keyInput}
                            onChange={(e) => setKeyInput(e.target.value)}
                            placeholder="Access key..."
                            style={{
                                padding: '0.85rem 1rem',
                                borderRadius: '12px',
                                border: '1.5px solid var(--text-primary)',
                                backgroundColor: '#ffffff',
                                fontSize: '1rem',
                            }}
                        />
                        {error && <p style={{ color: '#b91c1c', fontSize: '0.9rem', fontWeight: 600 }}>{error}</p>}
                        <button type="submit" className="btn-primary">
                            Unlock Stats
                        </button>
                    </form>
                ) : loading ? (
                    <p style={{ padding: '2rem 0', color: 'var(--text-secondary)', fontWeight: 600 }}>
                        Loading viewer statistics from Upstash Redis...
                    </p>
                ) : error ? (
                    <div
                        style={{
                            padding: '1.25rem',
                            borderRadius: '16px',
                            backgroundColor: '#fef2f2',
                            border: '1px solid #fecaca',
                            color: '#991b1b',
                        }}
                    >
                        <strong>Error:</strong> {error}
                    </div>
                ) : stats && (
                    <>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                                gap: '1rem',
                                marginBottom: '2rem',
                            }}
                        >
                            <div
                                style={{
                                    padding: '1.25rem',
                                    borderRadius: '18px',
                                    backgroundColor: 'var(--text-primary)',
                                    color: 'var(--bg-color)',
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: '0.78rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        opacity: 0.75,
                                    }}
                                >
                                    Total Responses
                                </div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1.1, marginTop: '0.25rem' }}>
                                    {total}
                                </div>
                            </div>

                            <div
                                style={{
                                    padding: '1.25rem',
                                    borderRadius: '18px',
                                    backgroundColor: '#ffffff',
                                    border: '1px solid var(--border-subtle)',
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: '0.78rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        color: 'var(--text-secondary)',
                                    }}
                                >
                                    Top Source
                                </div>
                                <div style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '0.45rem' }}>
                                    {topSource ? `${topSource.label} (${topSource.pct}%)` : 'No responses yet'}
                                </div>
                            </div>
                        </div>

                        <h3
                            style={{
                                fontSize: '0.85rem',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '1.5px',
                                marginBottom: '1rem',
                            }}
                        >
                            Channel Breakdown
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                            {sortedEntries.map((item) => (
                                <div
                                    key={item.id}
                                    style={{
                                        padding: '0.9rem 1.1rem',
                                        borderRadius: '14px',
                                        backgroundColor: '#ffffff',
                                        border: '1px solid var(--border-subtle)',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            fontWeight: 700,
                                            marginBottom: '0.45rem',
                                        }}
                                    >
                                        <span>{item.label}</span>
                                        <span>
                                            {item.count} ({item.pct}%)
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '8px',
                                            borderRadius: '100px',
                                            backgroundColor: 'rgba(18, 18, 18, 0.08)',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: `${item.pct}%`,
                                                height: '100%',
                                                backgroundColor: 'var(--accent-color)',
                                                borderRadius: '100px',
                                                transition: 'width 0.4s ease',
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3
                            style={{
                                fontSize: '0.85rem',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '1.5px',
                                marginBottom: '0.85rem',
                            }}
                        >
                            Recent Visitors ({stats.recent?.length || 0})
                        </h3>

                        {stats.recent && stats.recent.length > 0 ? (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.5rem',
                                    maxHeight: '240px',
                                    overflowY: 'auto',
                                    marginBottom: '1.5rem',
                                }}
                            >
                                {stats.recent.map((entry, idx) => (
                                    <div
                                        key={entry.id || idx}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            gap: '0.5rem',
                                            padding: '0.7rem 1rem',
                                            borderRadius: '12px',
                                            backgroundColor: '#ffffff',
                                            border: '1px solid var(--border-subtle)',
                                            fontSize: '0.9rem',
                                        }}
                                    >
                                        <div>
                                            <span style={{ fontWeight: 800 }}>
                                                {SOURCE_LABELS[entry.source] || entry.source}
                                            </span>
                                            {entry.otherText && (
                                                <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>
                                                    — "{entry.otherText}"
                                                </span>
                                            )}
                                        </div>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                                            {entry.timestamp
                                                ? new Date(entry.timestamp).toLocaleString()
                                                : ''}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                                No individual responses recorded yet.
                            </p>
                        )}

                        <div
                            style={{
                                borderTop: '1px solid var(--border-subtle)',
                                paddingTop: '1.25rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: '0.75rem',
                            }}
                        >
                            <button
                                type="button"
                                onClick={handleResetMySurvey}
                                className="btn-outline"
                                style={{ padding: '10px 18px', fontSize: '0.88rem' }}
                            >
                                <TbRotateClockwise size={16} />
                                <span>Test Survey Popup on This Browser</span>
                            </button>
                            <button
                                type="button"
                                onClick={handleClose}
                                className="btn-primary"
                                style={{ padding: '10px 22px', fontSize: '0.88rem' }}
                            >
                                Close Dashboard
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SurveyStatsModal;

