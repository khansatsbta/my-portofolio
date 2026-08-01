import React from 'react';

const Education = () => {
    return (
        <section id="education" className="section-padding dark-section">
            <h2 className="text-huge" style={{ textAlign: 'center', marginBottom: '5rem', color: 'var(--dark-section-text)' }}>
                academic <br/> <span className="serif-text" style={{ color: 'var(--accent-color)' }}>background.</span>
            </h2>

            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Universitas Negeri Semarang</h3>
                            <p className="serif-text" style={{ fontSize: '1.4rem', color: 'var(--accent-color)', marginTop: '0.5rem' }}>Computer Science, Information Systems</p>
                        </div>
                        <div style={{ textAlign: 'left', minWidth: '150px' }}>
                            <span style={{ fontWeight: 600, fontSize: '1.2rem', letterSpacing: '1px' }}>2021 – 2025</span>
                            <p style={{ fontSize: '1.1rem', marginTop: '0.5rem', opacity: 0.8 }}>GPA: 3.74/4.00</p>
                        </div>
                    </div>
                </div>

                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Bangkit Academy</h3>
                            <p className="serif-text" style={{ fontSize: '1.4rem', color: 'var(--accent-color)', marginTop: '0.5rem' }}>Machine Learning Cohort</p>
                        </div>
                        <div style={{ textAlign: 'left', minWidth: '150px' }}>
                            <span style={{ fontWeight: 600, fontSize: '1.2rem', letterSpacing: '1px' }}>Aug 2023 – Jan 2024</span>
                            <p style={{ fontSize: '1.1rem', marginTop: '0.5rem', opacity: 0.8 }}>Independent Study</p>
                        </div>
                    </div>
                    <p style={{ marginTop: '1.5rem', fontSize: '1.15rem', lineHeight: 1.6, opacity: 0.8, maxWidth: '600px' }}>
                        Hands-on learning in machine learning, data analytics, and project management using TensorFlow.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Education;
