import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding" style={{ paddingBottom: '6rem' }}>
            <div style={{ 
                textAlign: 'center', 
                maxWidth: '900px', 
                margin: '0 auto', 
                padding: '5rem 0', 
                borderTop: '4px solid var(--text-primary)', 
                borderBottom: '4px solid var(--text-primary)' 
            }}>
                <h2 className="text-huge" style={{ marginBottom: '2.5rem', lineHeight: 1 }}>
                    let's <br/><span className="serif-text" style={{ color: 'var(--accent-color)' }}>connect.</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3.5rem', fontSize: '1.25rem', lineHeight: 1.6 }}>
                    Let's connect! If you are looking for a Data Engineer, AI Engineer, or Data Scientist with a passion for building intelligent infrastructure—or if you have exciting projects to collaborate on—please don't hesitate to reach out.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
                    <a href="mailto:khansatsabita17@gmail.com" className="btn-primary" style={{ fontSize: '1.2rem', padding: '18px 48px' }}>
                        Email Me
                    </a>

                    <div style={{ display: 'flex', gap: '3rem', marginTop: '1rem', fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>
                        <a href="https://linkedin.com/in/khansatsbta" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color='var(--accent-color)'} onMouseLeave={e => e.target.style.color='var(--text-primary)'}>
                            LinkedIn
                        </a>
                        <a href="https://github.com/khansatsbta" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color='var(--accent-color)'} onMouseLeave={e => e.target.style.color='var(--text-primary)'}>
                            GitHub
                        </a>
                        <a href="https://gitlab.com/khansatsbta" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color='var(--accent-color)'} onMouseLeave={e => e.target.style.color='var(--text-primary)'}>
                            GitLab
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
