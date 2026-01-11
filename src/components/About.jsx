import React from 'react';

const About = () => {
    return (
        <section id="about-me" className="section-padding" style={{ position: 'relative' }}>
            <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem' }}>
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
