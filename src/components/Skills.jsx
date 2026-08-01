import { TbBrain, TbDatabase, TbCloud, TbServer, TbChartBar, TbUsers, TbWorld, TbTerminal } from 'react-icons/tb';
import RevealOnScroll from './RevealOnScroll';

const skillsData = {
    "Core Competencies": {
        icon: <TbBrain size={24} />,
        items: [
            "Data Pipeline Architecture & ETL",
            "Artificial Intelligence & Machine Learning",
            "Large Language Models (LLMs) & RAG",
            "Web Scraping & Data Ingestion",
            "Vector & Relational Databases",
            "Cloud Platforms",
            "Cross-functional Collaboration"
        ]
    },
    "AI & Machine Learning": {
        icon: <TbBrain size={24} />,
        items: ["TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "Agno", "Transformers", "Unsloth", "vLLM", "MCP", "RAG", "OCR"]
    },
    "Data Engineering": {
        icon: <TbServer size={24} />,
        items: ["Pandas", "NumPy", "Spark", "Hadoop", "Apache Airflow", "Apache Kafka", "RabbitMQ", "Beanstalkd", "Scrapy", "Selenium", "Requests", "BeautifulSoup"]
    },
    "Cloud & DevOps": {
        icon: <TbCloud size={24} />,
        items: ["AWS (EC2, S3)", "GCP", "Docker", "Kubernetes", "Git/GitHub", "Jenkins"]
    },
    "Backend Development": {
        icon: <TbTerminal size={24} />,
        items: ["Python", "Node.js", "SQL", "PHP", "Flask", "Django", "FastAPI", "FastMCP"]
    },
    "Databases": {
        icon: <TbDatabase size={24} />,
        items: ["Qdrant", "FAISS", "Pinecone", "ChromaDB", "MySQL", "PostgreSQL", "Elasticsearch", "MongoDB", "Clickhouse", "BigQuery"]
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
            <h2 className="text-huge" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                tech <br /> <span className="serif-text" style={{ color: 'var(--accent-color)' }}>arsenal.</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                {Object.entries(skillsData).map(([category, { icon, items }], index) => (
                    <RevealOnScroll key={category} delay={index * 0.1}>
                        <div style={{
                            borderTop: '2px solid var(--text-primary)',
                            paddingTop: '1.5rem',
                            height: '100%'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ color: 'var(--text-primary)' }}>
                                    {icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
                                    {category}
                                </h3>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {items.map(skill => (
                                    <span key={skill} style={{
                                        background: 'transparent',
                                        color: 'var(--text-primary)',
                                        padding: '8px 16px',
                                        borderRadius: '100px',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        border: '1px solid var(--text-primary)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'var(--text-primary)';
                                            e.target.style.color = 'var(--bg-color)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'transparent';
                                            e.target.style.color = 'var(--text-primary)';
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
