import React from 'react';

const experiences = [
    {
        role: 'Data Engineer',
        company: 'PT eBdesk Teknologi',
        period: 'January 2026 – Present',
        description: [
            'Build a full data pipeline for data scientist team.'
        ]
    },
    {
        role: 'Data Engineer (Data & AI)',
        company: 'PT Multiartha Prima Sejahtera (LSP Digital Marketing)',
        period: 'September 2025 – January 2026',
        description: [
            'Engineered a full payroll processing system automating base pay, deductions, and tax calculations.',
            'Developed a real-time financial budget control system with AI-powered OCR for invoice scanning.',
            'Architected an autonomous AI content pipeline using Qwen LLM for SEO-optimized articles.',
            'Deployed a RAG-based AI agent for government website information retrieval.',
            'Developed a B2B lead generation pipeline aggregating university records and enriching them with social media intelligence.',
            'Developed an automated compliance submission pipeline bridging internal systems with external government platforms sans API.'
        ]
    },
    {
        role: 'Data Scientist Intern',
        company: 'M-Knows Consulting',
        period: 'September 2024 – January 2025',
        description: [
            'Built an AI Location Movement Credit Scoring model with 96% accuracy.',
            'Developed a PDF RAG Chatbot with similarity indexing for document search.',
            'Created a PDF RAG WhatsApp Chatbot integrated with OpenAI API and Twilio.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section-padding">
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Work Experience
            </h2>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {experiences.map((exp, index) => (
                    <div key={index} className="glass-card" style={{ marginBottom: '2rem', position: 'relative' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                                <h4 style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>{exp.company}</h4>
                            </div>
                            <span style={{
                                background: 'rgba(255,255,255,0.1)',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                fontSize: '0.85rem',
                                height: 'fit-content'
                            }}>
                                {exp.period}
                            </span>
                        </div>

                        <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                            {exp.description.map((item, i) => (
                                <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
