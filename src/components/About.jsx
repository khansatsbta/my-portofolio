import React from 'react';
import { TbBolt, TbBarbell, TbCoffee, TbDeviceGamepad2, TbHeadphones, TbMoonStars } from 'react-icons/tb';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ position: 'relative' }}>
            <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem', marginBottom: '2rem' }}>
                <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                    Beyond the Code
                </h2>
                <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        I started my journey in <strong style={{ color: 'var(--text-primary)' }}>Information Systems</strong>, fascinated by how data moves through organizations.
                        But I didn't just want to manage databases; I wanted to
                        <span style={{ color: 'var(--accent-cyan)' }}> unlock their potential</span>.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Transitioning from a Data Scientist Intern to a <strong>Data Engineer</strong> gave me a comprehensive view of the entire data lifecycle.
                        I've built end-to-end pipelines that don't just move bytes but drive real business decisions, from
                        automating complex payroll systems for finance teams to fine-tuning LLMs that write like humans.
                    </p>
                    <p>
                        I believe the future of tech lies at the intersection of <strong>Robust Engineering</strong> and <strong>Creative AI</strong>.
                        Whether it's optimizing RAG agents for public sector websites or calculating tax modules,
                        my goal is always the same: <em style={{ color: 'var(--text-primary)' }}>Make complex systems feel simple and magic.</em>
                    </p>
                </div>
            </div>

            {/* Fun Facts / Bio Widgets */}
            <div style={{
                display: 'flex',
                gap: '1.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                maxWidth: '900px',
                margin: '0 auto'
            }}>
                <div className="glass-card" style={{
                    padding: '1.5rem',
                    flex: '1 1 250px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    background: 'white',
                    border: '1px solid var(--accent-cyan)'
                }}>
                    <div style={{
                        background: 'rgba(2, 132, 199, 0.1)',
                        padding: '10px',
                        borderRadius: '50%',
                        color: 'var(--accent-cyan)',
                        display: 'flex'
                    }}>
                        <TbBolt size={24} />
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>ESTP Personality</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Energetic & Action-Oriented</p>
                    </div>
                </div>

                <div className="glass-card" style={{
                    padding: '1.5rem',
                    flex: '1 1 250px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    background: 'white',
                    border: '1px solid var(--accent-purple)'
                }}>
                    <div style={{
                        background: 'rgba(3, 105, 161, 0.1)',
                        padding: '10px',
                        borderRadius: '50%',
                        color: 'var(--accent-purple)',
                        display: 'flex'
                    }}>
                        <TbBarbell size={24} />
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>Fitness Enthusiast</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Disciplined & Resilient</p>
                    </div>
                </div>

                <div className="glass-card" style={{
                    padding: '1.5rem',
                    flex: '1 1 250px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    background: 'white',
                    border: '1px solid var(--accent-cyan)'
                }}>
                    <div style={{
                        background: 'rgba(2, 132, 199, 0.1)',
                        padding: '10px',
                        borderRadius: '50%',
                        color: 'var(--accent-cyan)',
                        display: 'flex'
                    }}>
                        <TbCoffee size={24} />
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>Powered by Latte</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Can't code without it</p>
                    </div>
                </div>

                <div className="glass-card" style={{
                    padding: '1.5rem',
                    flex: '1 1 250px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    background: 'white',
                    border: '1px solid var(--accent-purple)'
                }}>
                    <div style={{
                        background: 'rgba(3, 105, 161, 0.1)',
                        padding: '10px',
                        borderRadius: '50%',
                        color: 'var(--accent-purple)',
                        display: 'flex'
                    }}>
                        <TbHeadphones size={24} />
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>Indie Rock & Gaming</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Unwinding with good vibes</p>
                    </div>
                </div>

                <div className="glass-card" style={{
                    padding: '1.5rem',
                    flex: '1 1 250px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    background: 'white',
                    border: '1px solid var(--accent-cyan)'
                }}>
                    <div style={{
                        background: 'rgba(2, 132, 199, 0.1)',
                        padding: '10px',
                        borderRadius: '50%',
                        color: 'var(--accent-cyan)',
                        display: 'flex'
                    }}>
                        <TbMoonStars size={24} />
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>Night Owl Coder</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Best commits happen at 2 AM</p>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '50%',
                right: '10%',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(112, 0, 255, 0.1) 0%, rgba(0,0,0,0) 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>
        </section>
    );
};

export default About;
