import React, { useState, useEffect } from 'react';
import { TbArrowUpRight, TbCheck } from 'react-icons/tb';

const STORAGE_KEY = 'khansa_portfolio_survey_v1';

const SURVEY_OPTIONS = [
    {
        id: 'cv',
        label: 'CV / Resume',
        hint: 'Job application or PDF resume',
    },
    {
        id: 'linkedin',
        label: 'LinkedIn',
        hint: 'Profile, post, or direct message',
    },
    {
        id: 'github',
        label: 'GitHub / GitLab',
        hint: 'Repositories or code profile',
    },
    {
        id: 'referral',
        label: 'Friend / Referral',
        hint: 'Shared by a colleague or recruiter',
    },
    {
        id: 'other',
        label: 'Other',
        hint: 'Search engine, article, or elsewhere',
    },
];

const ViewerSurveyModal = () => {
    const [isOpen, setIsOpen] = useState(() => {
        if (typeof window === 'undefined') return false;
        const params = new URLSearchParams(window.location.search);
        if (params.has('stats')) return false;
        try {
            return !localStorage.getItem(STORAGE_KEY);
        } catch {
            return true;
        }
    });
    const [selected, setSelected] = useState('');
    const [otherText, setOtherText] = useState('');
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selected) {
            setError('Please select one option to continue.');
            return;
        }
        if (selected === 'other' && !otherText.trim()) {
            setError('Please share where you found this link.');
            return;
        }

        setError('');
        setSubmitting(true);

        const payload = {
            source: selected,
            otherText: selected === 'other' ? otherText.trim() : '',
            referrer: document.referrer || '',
        };

        try {
            await fetch('/api/survey', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
        } catch {
            // Unlock portfolio even if network request is blocked
        }

        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({
                    ...payload,
                    submittedAt: new Date().toISOString(),
                })
            );
        } catch {
            // Ignore storage quota errors
        }

        setSubmitting(false);
        setIsOpen(false);
    };

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="viewer-survey-title"
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 3000,
                backgroundColor: 'rgba(18, 18, 18, 0.78)',
                backdropFilter: 'blur(6px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.25rem',
                overflowY: 'auto',
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    width: '100%',
                    maxWidth: '540px',
                    backgroundColor: 'var(--bg-color)',
                    color: 'var(--text-primary)',
                    border: '2px solid var(--text-primary)',
                    borderRadius: '28px',
                    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.28)',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span
                        style={{
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '1.5px',
                            backgroundColor: 'var(--accent-color)',
                            color: 'var(--text-primary)',
                            padding: '4px 10px',
                            borderRadius: '100px',
                        }}
                    >
                        Quick Check-in • Required
                    </span>
                </div>

                <h2
                    id="viewer-survey-title"
                    style={{
                        fontSize: 'clamp(1.85rem, 4vw, 2.5rem)',
                        fontWeight: 900,
                        lineHeight: 1.05,
                        marginBottom: '0.5rem',
                    }}
                >
                    where do you{' '}
                    <span className="serif-text" style={{ fontWeight: 600 }}>
                        know me
                    </span>{' '}
                    from?
                </h2>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', marginBottom: '1.5rem' }}>
                    Before exploring my portfolio, let me know how you found this link.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.25rem' }}>
                    {SURVEY_OPTIONS.map((option) => {
                        const isSelected = selected === option.id;
                        return (
                            <button
                                key={option.id}
                                type="button"
                                onClick={() => {
                                    setSelected(option.id);
                                    setError('');
                                }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    textAlign: 'left',
                                    padding: '0.9rem 1.15rem',
                                    borderRadius: '16px',
                                    border: isSelected
                                        ? '2px solid var(--text-primary)'
                                        : '1px solid var(--border-subtle)',
                                    backgroundColor: isSelected ? 'var(--accent-color)' : '#ffffff',
                                    color: 'var(--text-primary)',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    fontFamily: 'inherit',
                                }}
                            >
                                <div>
                                    <div style={{ fontWeight: 800, fontSize: '1rem', lineHeight: 1.2 }}>
                                        {option.label}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: '0.82rem',
                                            color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                                            opacity: isSelected ? 0.85 : 1,
                                            marginTop: '2px',
                                        }}
                                    >
                                        {option.hint}
                                    </div>
                                </div>

                                <div
                                    style={{
                                        width: '26px',
                                        height: '26px',
                                        borderRadius: '50%',
                                        border: '2px solid var(--text-primary)',
                                        backgroundColor: isSelected ? 'var(--text-primary)' : 'transparent',
                                        color: 'var(--bg-color)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}
                                >
                                    {isSelected && <TbCheck size={16} />}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {selected === 'other' && (
                    <div style={{ marginBottom: '1.25rem' }}>
                        <label
                            htmlFor="survey-other-input"
                            style={{
                                display: 'block',
                                fontSize: '0.82rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                marginBottom: '0.4rem',
                            }}
                        >
                            Please specify
                        </label>
                        <input
                            id="survey-other-input"
                            type="text"
                            maxLength={120}
                            value={otherText}
                            onChange={(e) => {
                                setOtherText(e.target.value);
                                setError('');
                            }}
                            placeholder="e.g. Google search, Medium, Instagram..."
                            autoFocus
                            style={{
                                width: '100%',
                                padding: '0.85rem 1rem',
                                borderRadius: '12px',
                                border: '1.5px solid var(--text-primary)',
                                backgroundColor: '#ffffff',
                                color: 'var(--text-primary)',
                                fontSize: '0.95rem',
                                fontFamily: 'inherit',
                                outline: 'none',
                            }}
                        />
                    </div>
                )}

                {error && (
                    <p
                        role="alert"
                        style={{
                            color: '#b91c1c',
                            fontSize: '0.88rem',
                            fontWeight: 600,
                            marginBottom: '1rem',
                        }}
                    >
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary"
                    style={{
                        width: '100%',
                        padding: '1rem 1.5rem',
                        fontSize: '1rem',
                        opacity: submitting ? 0.7 : 1,
                    }}
                >
                    <span>{submitting ? 'Entering Portfolio...' : 'Continue to Portfolio'}</span>
                    <TbArrowUpRight size={20} />
                </button>
            </form>
        </div>
    );
};

export default ViewerSurveyModal;

