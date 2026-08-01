import React from 'react';

const experiences = [
    {
        company: 'PT eBdesk Technology',
        roles: [
            {
                title: 'AI Native (AI Data Specialist)',
                period: 'June 2026 – Present',
                description: [
                    'Built and managed data pipelines from scratch, ensuring real-time data flows smoothly from start to finish.',
                    'Created a smart AI agent that practically runs social media on its own—liking, commenting, following, and posting content tailored to specific personas.'
                ]
            },
            {
                title: 'Data Engineer',
                period: 'January 2026 – June 2026',
                description: [
                    'Managed the full lifecycle of large-scale data pipelines, turning raw data streams into usable insights.',
                    'Set up an AI-driven Root Cause Analysis system that automatically maps out data pipelines, spots anomalies, and tells us exactly how to fix failures.',
                    'Built a heavy-duty web scraping setup to gather and organize messy data from all over the web.',
                    'Wired up the backend for a complex conversational AI, connecting data streams to custom tools so the chatbot could actually perform tasks.'
                ]
            }
        ]
    },
    {
        company: 'PT Multiartha Prima Sejahtera (LSP Digital Marketing)',
        roles: [
            {
                title: 'Data Engineer (Data & AI)',
                period: 'September 2025 – January 2026',
                description: [
                    'Automated the entire payroll system, taking the headache out of calculating base pay, overtime, and taxes for the finance team.',
                    'Built a financial tracking tool that uses AI to read invoices and checks them against budgets in real-time, instantly alerting the team of any overspending.',
                    'Designed an AI bot that hunts down trending news and writes readable, SEO-friendly articles, then automatically publishes them to WordPress.',
                    'Created an AI agent that cuts through the noise of complicated government websites, helping users find exactly what they need just by asking questions.'
                ]
            }
        ]
    },
    {
        company: 'M-Knows Consulting',
        roles: [
            {
                title: 'Data Scientist Intern',
                period: 'September 2024 – January 2025',
                description: [
                    'Developed a credit scoring model (with 96% accuracy!) that predicts credit risk based on how and where a user travels.',
                    'Built a smart chatbot that can read, search, and answer questions from massive PDFs in seconds.',
                    'Created a WhatsApp bot that acts as an instant customer service agent, answering questions in real-time.',
                    'Worked closely with different teams to make sure all these fast-moving AI projects launched on time.'
                ]
            }
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section-padding" style={{ backgroundColor: 'var(--bg-color)' }}>

            <div style={{ marginBottom: '6rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 className="text-huge" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    career <br /> <span style={{ color: 'var(--accent-color)' }}>exhibition.</span>
                </h2>
                <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '800px', textAlign: 'left', lineHeight: 1.7, marginTop: '2rem' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Experience Highlights</p>
                    <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', listStyleType: 'square' }}>
                        <li>Hands-on experience in Data Engineering, AI integration, and end-to-end pipeline development</li>
                        <li>Strong expertise in LLMs, RAG, and Agentic workflows</li>
                        <li>Proven track record of developing automated financial, payroll, and data retrieval systems</li>
                        <li>Collaborative team player accustomed to working with diverse, cross-functional stakeholders</li>
                        <li>Skilled in architecting Knowledge Graphs and integrating advanced AI reasoning (Chain of Thought)</li>
                        <li>Native Indonesian and advanced English proficiency</li>
                    </ul>
                </div>
            </div>

            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                {experiences.map((exp, index) => (
                    <div key={index} style={{ borderBottom: index !== experiences.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none', paddingBottom: '4rem' }}>

                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '3rem' }}>
                            <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--text-primary)', opacity: 0.2 }}>
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className="serif-text" style={{ fontSize: '2.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                                {exp.company}
                            </h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
                            {exp.roles.map((role, rIndex) => (
                                <div key={rIndex} style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'start' }}>

                                    <div style={{ flex: '1 1 250px', borderTop: '3px solid var(--text-primary)', paddingTop: '1rem' }}>
                                        <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.3 }}>
                                            {role.title}
                                        </h4>
                                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                                            {role.period}
                                        </span>
                                    </div>

                                    <div style={{ flex: '2 1 400px' }}>
                                        <ul style={{ listStyleType: 'none', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                                            {role.description.map((item, i) => (
                                                <li key={i} style={{ marginBottom: '1.2rem', position: 'relative', paddingLeft: '2rem' }}>
                                                    <span style={{ position: 'absolute', left: 0, top: '2px', color: 'var(--accent-color)', fontWeight: 800 }}>—</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
