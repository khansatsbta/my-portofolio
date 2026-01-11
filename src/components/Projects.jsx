import React, { useState } from 'react';
import { TbChevronRight, TbX } from 'react-icons/tb';

const projects = [
    {
        title: 'Autonomous AI Content Pipeline',
        tech: ['Qwen LLM', 'Streamlit', 'Python', 'WordPress API'],
        desc: 'Automated news scraping and SEO article generation pipeline using fine-tuned LLMs.',
        details: [
            'Architected an autonomous AI content pipeline that scrapes real-time news to generate SEO-optimized articles.',
            'Fine-tuned the Qwen LLM to mimic human writing styles, ensuring high readability standards.',
            'Integrated the entire workflow from data ingestion to WordPress publishing.',
            'Built a monitoring system via a Streamlit dashboard.'
        ]
    },
    {
        title: 'B2B Lead Gen Pipeline',
        tech: ['Python', 'OCR', 'Scraping', 'Multi-threading'],
        desc: 'Automated pipeline aggregating university records and enriching with social media intelligence.',
        details: [
            'Engineered an automated data pipeline to generate B2B leads by aggregating university records from PDDIKTI.',
            'Enriched data with social media intelligence and optimized ingestion using multi-threaded Python.',
            'Integrated Optical Character Recognition (OCR) to extract contact details from unstructured Instagram images.',
            'Transformed raw web data into a structured database for marketing outreach.'
        ]
    },
    {
        title: 'Gov Info Retrieval Bot',
        tech: ['RAG', 'AI Agent', 'Python', 'Vector DB'],
        desc: 'AI agent for solving information discovery challenges on complex public sector websites.',
        details: [
            'Designed and deployed an AI agent to solve information discovery challenges on complex public sector websites.',
            'Leveraged a RAG-based system with a custom-scraped knowledge base.',
            'Allowed users to bypass difficult navigation and obtain specific data through conversational queries.'
        ]
    },
    {
        title: 'Financial System & AI OCR',
        tech: ['AI OCR', 'Python', 'Real-time Analytics'],
        desc: 'Full-cycle financial system with real-time budget control and invoice parsing.',
        details: [
            'Developed a full-cycle financial system with real-time budget control.',
            'Integrated an AI-powered OCR model to scan and parse invoices.',
            'Implemented real-time comparison of expenditures against budgets to notify finance teams of overages.'
        ]
    },
    {
        title: 'Payroll Processing System',
        tech: ['Python', 'SQL', 'Automation'],
        desc: 'Automated system for base pay, deductions, overtime, and tax compliance.',
        details: [
            'Engineered a full payroll processing system automating base pay, attendance deductions, and overtime.',
            'Integrated PPh 21 tax calculation modules to ensure compliance.',
            'Significantly reduced manual errors for the finance team.'
        ]
    },
    {
        title: 'AI Location Credit Scoring',
        tech: ['Python', 'Faker', 'PyCaret', 'Django'],
        desc: 'Predictive model analyzing user movement and geolocation stability for credit risk assessment.',
        details: [
            'Built a predictive model to classify users\' credit risk based on movement data and geolocation stability.',
            'Engineered features from GPS, social media, and BTS data to assess risk categories.',
            'Visualized user movement and credit scoring metrics using Tableau.',
            'Built REST APIs using Django REST Framework for seamless integration with frontend applications.'
        ]
    },
    {
        title: 'FAQ RAG Chatbot',
        tech: ['DeepSeek', 'Ollama', 'LangChain', 'Docker'],
        desc: 'Sophisticated FAQ bot using local vector storage and embedding models for precise answers.',
        details: [
            'Developed a chatbot that responds to all user inquiries regarding the FAQ via a chat interface.',
            'Utilized sophisticated embedding models (Ollama) and local vector storage for effective question-answering.',
            'Integrated with Docker for containerized deployment.'
        ]
    },
    {
        title: 'Recraftify - Waste AI',
        tech: ['TensorFlow', 'Flask', 'MobileNetV2'],
        desc: 'Image classification model for waste sorting with 95% accuracy, deployed as REST API.',
        details: [
            'Spearheaded the development of a multi-class image classification model for the Recraftify mobile app.',
            'Built and curated a robust dataset by manually labeling over 23,000 waste images.',
            'Achieved 95% accuracy using Transfer Learning with MobileNetV2.',
            'Deployed the model as a REST API using Flask for real-time predictions.'
        ]
    },
    {
        title: 'WhatsApp RAG Bot',
        tech: ['Twilio', 'OpenAI', 'AWS', 'Flask'],
        desc: 'Real-time document interaction bot integrated with WhatsApp for automated customer responses.',
        details: [
            'Created a PDF RAG chatbot integrated with Twilio and OpenAI API.',
            'Enabled real-time processing of user data and automated responses.',
            'Hosted on AWS with Ngrok for tunneling during development.'
        ]
    },
    {
        title: 'Sentiment Analysis',
        tech: ['TensorFlow', 'LSTM', 'Python'],
        desc: 'Customer sentiment classification for service providers with 92% accuracy using LSTM.',
        details: [
            'Conducted sentiment analysis on a dataset of customer tweets regarding cellular service providers.',
            'Classified tweets into Positive or Negative categories to identify customer satisfaction points.',
            'Developed an LSTM model achieving 92% accuracy.'
        ]
    },
    {
        title: 'Coursera Analysis',
        tech: ['Scrapy', 'DeepSeek', 'NLTK'],
        desc: 'End-to-end research analyzing 1,300+ reviews using LLMs and Multinomial Logistic Regression.',
        details: [
            'Conducted end-to-end research to analyze the quality of Coursera\'s platform services.',
            'Analyzed 1,308 user reviews using LLMs to classify feedback into SERVQUAL dimensions.',
            'Performed statistical analysis using Multinomial Logistic Regression.'
        ]
    }
];

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(5px)',
            zIndex: 2000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
        }} onClick={onClose}>
            <div
                className="glass-card"
                style={{
                    maxWidth: '600px',
                    width: '100%',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    position: 'relative',
                    padding: '2rem'
                }}
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer',
                        fontSize: '1.5rem'
                    }}
                >
                    <TbX />
                </button>

                <h3 className="text-gradient" style={{ fontSize: '1.8rem', marginBottom: '1rem', paddingRight: '2rem' }}>
                    {project.title}
                </h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {project.tech.map((t, i) => (
                        <span key={i} style={{
                            fontSize: '0.8rem',
                            padding: '4px 10px',
                            borderRadius: '20px',
                            background: 'rgba(0, 240, 255, 0.1)',
                            color: 'var(--accent-cyan)',
                            border: '1px solid rgba(0, 240, 255, 0.2)'
                        }}>
                            {t}
                        </span>
                    ))}
                </div>

                <p style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                    {project.desc}
                </p>

                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.2rem' }}>Key Highlights</h4>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                        {Array.isArray(project.details) ? project.details.map((detail, i) => (
                            <li key={i} style={{ marginBottom: '0.8rem' }}>{detail}</li>
                        )) : (
                            <li>{project.details}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="section-padding">
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Featured Projects
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {projects.map((proj, index) => (
                    <div key={index} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{proj.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                            {proj.desc}
                        </p>
                        <div className='!mb-3' style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {proj.tech.map((t, i) => (
                                <span key={i} style={{
                                    fontSize: '0.75rem',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    background: 'rgba(0, 240, 255, 0.1)',
                                    color: 'var(--accent-cyan)',
                                    border: '1px solid rgba(0, 240, 255, 0.2)'
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Removed the inline details p tag as requested, details are now in modal */}

                        <div
                            className="flex justify-end items-center gap-1 cursor-pointer hover:underline text-sm"
                            onClick={() => setSelectedProject(proj)}
                            style={{ color: 'var(--accent-cyan)', marginTop: 'auto', alignSelf: 'flex-end', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
                        >
                            View Details
                            <TbChevronRight size={16} />
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </section>
    );
};

export default Projects;
