import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="section-padding" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '80px' // for navbar
        }}>
            <div style={{
                marginBottom: '1rem',
                padding: '0.5rem 1rem',
                border: '1px solid var(--accent-cyan)',
                borderRadius: '50px',
                color: 'var(--accent-cyan)',
                fontSize: '0.9rem',
                display: 'inline-block'
            }}>
                ✨ Available for Work and Collaboration
            </div>

            <div style={{
                marginBottom: '2rem',
                position: 'relative'
            }}>
                <div style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
                    padding: '4px',
                    boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)'
                }}>
                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            background: '#1a1a1a' // Fallback color
                        }}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none'; // Hide if missing
                            e.target.parentNode.style.display = 'none'; // Hide container too if you want, or show placeholder
                        }}
                    />
                </div>
            </div>

            <h1 style={{
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                fontWeight: 700,
                marginBottom: '1rem',
                lineHeight: 1.1
            }}>
                Hi, I'm <span className="text-gradient">Khansa Tsabita</span>
            </h1>

            <h2 style={{
                fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                fontWeight: 400
            }}>
                Data & <span style={{ color: 'var(--accent-purple)' }}>AI Enthusiast</span>
            </h2>

            <p style={{
                maxWidth: '600px',
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                marginBottom: '3rem',
                lineHeight: 1.8
            }}>
                Architecting end-to-end data pipelines and building scalable AI solutions.
                Passionate about turning raw data into meaningful insights.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem' }}>
                <a href="#projects" className="btn-primary">
                    View Projects
                </a>
                <a href="#contact" style={{
                    padding: '12px 24px',
                    borderRadius: '50px',
                    fontWeight: 600,
                    border: '1px solid var(--glass-border)',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'white',
                    transition: 'all 0.3s'
                }}>
                    Contact Me
                </a>
            </div>

            {/* Current Focus / Tech Radar Widget */}
            <div className="glass-card" style={{
                padding: '1.5rem 2.5rem',
                borderRadius: '50px',
                backdropFilter: 'blur(10px)',
                background: 'rgba(5, 5, 5, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginRight: '1rem' }}>
                    Currently Exploring:
                </span>
                <span style={{ fontWeight: 600, color: 'var(--accent-cyan)' }}>
                    Agentic AI Workflows
                </span>
                <span style={{ margin: '0 10px', color: 'var(--glass-border)' }}>|</span>
                <span style={{ fontWeight: 600, color: 'var(--accent-purple)' }}>
                    Generative Optimization
                </span>
                <span style={{ margin: '0 10px', color: 'var(--glass-border)' }}>|</span>
                <span style={{ fontWeight: 600, color: '#fff' }}>
                    Scaleable Pipelines
                </span>
            </div>
        </section>
    );
};

export default Hero;
