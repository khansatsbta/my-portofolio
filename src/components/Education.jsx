import React from 'react';

const Education = () => {
    return (
        <section id="education" className="section-padding">
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Education
            </h2>

            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="glass-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem' }}>Universitas Negeri Semarang</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Computer Science, Information Systems</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <span style={{ color: 'var(--accent-purple)', fontWeight: 'bold' }}>2021 – 2025</span>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>GPA: 3.74/4.00</p>
                        </div>
                    </div>
                </div>

                <div className="glass-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem' }}>Bangkit Academy</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Machine Learning Cohort</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <span style={{ color: 'var(--accent-purple)', fontWeight: 'bold' }}>Aug 2023 – Jan 2024</span>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Independent Study</p>
                        </div>
                    </div>
                    <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                        Hands-on learning in machine learning, data analytics, and project management using TensorFlow.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Education;
