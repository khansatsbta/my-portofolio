import { TbBrain, TbDatabase, TbCloud, TbServer, TbChartBar, TbUsers, TbWorld, TbTerminal } from 'react-icons/tb';
import RevealOnScroll from './RevealOnScroll';

const skillsData = {
    "AI & Machine Learning": {
        icon: <TbBrain size={24} />,
        items: ["TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "Transformers", "LLM Fine-Tuning", "RAG", "OCR"]
    },
    "Data Engineering": {
        icon: <TbServer size={24} />,
        items: ["Pandas", "NumPy", "Spark", "Hadoop", "Apache Airflow", "Apache Kafka", "Scrapy", "Selenium", "Requests", "BeautifulSoup"]
    },
    "Cloud & DevOps": {
        icon: <TbCloud size={24} />,
        items: ["AWS (EC2, S3)", "GCP", "Docker", "Git/GitHub"]
    },
    "Backend Development": {
        icon: <TbTerminal size={24} />,
        items: ["Python", "SQL", "PHP", "Flask", "Django", "FastAPI"]
    },
    "Databases": {
        icon: <TbDatabase size={24} />,
        items: ["FAISS", "Pinecone", "ChromaDB", "MySQL", "PostgreSQL", "Elasticsearch"]
    },
    "Visualization": {
        icon: <TbChartBar size={24} />,
        items: ["Tableau", "Power BI", "Streamlit"]
    },
    "Soft Skills": {
        icon: <TbUsers size={24} />,
        items: ["Problem-solving", "Analytical Thinking", "Team Collaboration", "Communication", "Fast Learner"]
    },
    "Languages": {
        icon: <TbWorld size={24} />,
        items: ["Bahasa Indonesia (Native)", "English (Advanced)"]
    }
};

const Skills = () => {
    return (
        <section id="skills" className="section-padding">
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Skills
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {Object.entries(skillsData).map(([category, { icon, items }], index) => (
                    <RevealOnScroll key={category} delay={index * 0.1}>
                        <div className="glass-card animate-float" style={{ transition: 'transform 0.3s', height: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                                <div style={{
                                    padding: '10px',
                                    borderRadius: '12px',
                                    background: 'rgba(2, 132, 199, 0.1)', // Light blue bg
                                    color: 'var(--accent-cyan)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    color: 'var(--text-primary)',
                                    fontWeight: 600
                                }}>
                                    {category}
                                </h3>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {items.map(skill => (
                                    <span key={skill} style={{
                                        background: '#f8fafc', // Slate 50
                                        color: 'var(--text-secondary)',
                                        padding: '8px 16px',
                                        borderRadius: '50px',
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                        border: '1px solid #e2e8f0', // Slate 200
                                        transition: 'all 0.2s ease',
                                        cursor: 'default'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'var(--accent-cyan)';
                                            e.target.style.color = 'white';
                                            e.target.style.borderColor = 'var(--accent-cyan)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = '#f8fafc';
                                            e.target.style.color = 'var(--text-secondary)';
                                            e.target.style.borderColor = '#e2e8f0';
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
};

export default Skills;
