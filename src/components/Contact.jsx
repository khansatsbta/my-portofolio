import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding" style={{ marginBottom: '4rem' }}>
            <div className="glass-card" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                    Let's Connect
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    Interested in collaborating or have a question? Feel free to reach out.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                    <a href="mailto:khansatsabita17@gmail.com" className="btn-primary" style={{ width: 'fit-content' }}>
                        Email Me
                    </a>

                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                        <a href="https://linkedin.com/in/khansatsbta" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>
                            LinkedIn
                        </a>
                        <a href="https://github.com/khansatsbta" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>
                            GitHub
                        </a>
                        <a href="https://gitlab.com/khansatsbta" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>
                            GitLab
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
