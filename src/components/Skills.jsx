import React from 'react';

const skillsData = {
    "AI & Machine Learning": ["TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "Transformers", "LLM Fine-Tuning", "RAG", "OCR"],
    "Data Engineering": ["Pandas", "NumPy", "Spark", "Hadoop", "Apache Airflow", "Scrapy", "Selenium"],
    "Cloud & DevOps": ["AWS (EC2, S3)", "GCP", "Docker", "Git/GitHub"],
    "Backend Development": ["Python", "SQL", "PHP", "Flask", "Django", "FastAPI"],
    "Databases": ["FAISS", "Pinecone", "ChromaDB", "MySQL", "PostgreSQL"],
    "Visualization": ["Tableau", "Power BI", "Streamlit"],
    "Soft Skills": ["Problem-solving", "Analytical Thinking", "Team Collaboration", "Communication", "Fast Learner"],
    "Languages": ["Bahasa Indonesia (Native)", "English (Advanced)"]
};

const Skills = () => {
    return (
        <section id="skills" className="section-padding">
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Skills
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {Object.entries(skillsData).map(([category, items]) => (
                    <div key={category} className="glass-card">
                        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-cyan)' }}>{category}</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {items.map(skill => (
                                <span key={skill} style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '6px 14px',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
