import React, { useState } from 'react';
import { TbChevronRight, TbX } from 'react-icons/tb';
import RevealOnScroll from './RevealOnScroll';
import ProjectVisual from './ProjectVisual';

const projects = [
    {
        title: 'Autonomous AI Content Pipeline',
        tech: ['Requests', 'BeautifulSoup', 'Regex', 'LLM', 'Transformers', 'PEFT', 'TRL', 'Streamlit', 'Python', 'WordPress, Linkedin, Instagram API', 'Docker', 'PostgreSQL'],
        images: ['/project1.png', '/project1-article.png'], // Example of multiple images
        desc: 'A fully automated system that hunts for news and writes SEO-friendly articles using AI.',
        details: [
            'Built a hands-free pipeline that automatically scrapes the latest news and writes SEO-optimized articles.',
            'Trained an AI model (Qwen LLM) to write exactly like a human, keeping things readable and engaging.',
            'Connected the whole setup to automatically publish straight to WordPress, LinkedIn, and Instagram.',
            'Created a simple Streamlit dashboard to keep an eye on everything.'
        ]
    },
    {
        title: 'BNSP Licensing Automation',
        tech: ['JavaScript', 'Node.js', 'Selenium', 'Frontend Injection', 'Automation'],
        image: '/project3.png',
        desc: 'A clever bot that handles tedious government compliance forms automatically.',
        details: [
            'Built a browser bot using JavaScript and Selenium to connect internal databases directly to the BNSP portal.',
            'Automated the boring stuff: logging in, filling out forms, and uploading documents for certification requests.',
            'Used some neat frontend tricks to upload documents on sites that didn\'t even have a public API.',
            'Saved the team countless hours and drastically cut down on typos and manual errors.'
        ]
    },
    {
        title: 'B2B Lead Gen Pipeline',
        tech: ['Selenium', 'Requests', 'BeautifulSoup', 'Regex', 'Python', 'OCR', 'ThreadPool', 'MySQL', 'Docker'],
        image: '/project2.png',
        desc: 'A data pipeline that tracks down B2B leads from university records and social media.',
        details: [
            'Set up an automated system to scrape university data (PDDIKTI) and build a massive list of B2B leads.',
            'Used multi-threaded Python to quickly enrich the data with social media intelligence.',
            'Added AI vision (OCR) to literally read contact info right off of Instagram posts.',
            'Turned a messy web of data into a clean, actionable database for the marketing team.'
        ]
    },
    {
        title: 'Gov Info Retrieval Bot',
        tech: ['Selenium', 'Requests', 'BeautifulSoup', 'Regex', 'LLM', 'Python', 'ChromaDB', 'Langchain', 'Typescript', 'Docker', 'FastAPI'],
        image: '/project_gov_bot.png',
        desc: 'An AI assistant that makes finding info on messy government websites a breeze.',
        details: [
            'Built an AI agent to tackle the nightmare of navigating complex public sector websites.',
            'Created a custom knowledge base by scraping the sites and plugging them into a RAG system.',
            'Now, users can just ask a simple question in chat instead of clicking through endless menus.'
        ]
    },
    {
        title: 'Financial System & AI OCR',
        tech: ['OCR', 'Python', 'Flask', 'MySQL'],
        image: '/project_finance_ocr.png',
        desc: 'A smart finance tool that reads invoices and watches the budget in real-time.',
        details: [
            'Built a complete financial system that tracks the company budget as it happens.',
            'Added an AI scanner that can read and organize messy invoices automatically.',
            'Set up instant alerts so the finance team always knows if someone is overspending.'
        ]
    },
    {
        title: 'Payroll Processing System',
        tech: ['Python', 'MySQL', 'Automation', 'Flask'],
        image: '/project_payroll.png',
        desc: 'An automated platform that takes the headache out of calculating paychecks and taxes.',
        details: [
            'Wrote a system that automatically calculates base pay, sick days, and tricky overtime rules.',
            'Baked in local tax laws (PPh 21) so the company is always compliant.',
            'Made payday a lot less stressful (and much more accurate) for the finance team.'
        ]
    },
    {
        title: 'AI Location Credit Scoring',
        tech: ['Python', 'Faker', 'PyCaret', 'Django'],
        image: '/project_credit_score.png',
        desc: 'A predictive model that figures out credit risk based on where people go.',
        details: [
            'Built an AI model that predicts credit risk by looking at how people move around and how stable their location is.',
            'Pulled in data from GPS, social media, and cell towers to get a full picture of risk.',
            'Created cool interactive maps in Tableau to show exactly what the AI was thinking.',
            'Wrapped it all up in a clean API so the frontend team could easily plug it into their app.'
        ]
    },
    {
        title: 'FAQ RAG Chatbot',
        tech: ['DeepSeek', 'Ollama', 'LangChain', 'Docker', 'Streamlit'],
        image: '/project-nawa.jpeg',
        desc: 'A super-smart chatbot that actually knows the answers to company FAQs.',
        details: [
            'Built a chatbot that actually gives helpful answers to user questions instead of just linking to a page.',
            'Used local AI models (Ollama) and vector search so the bot actually understands what the user is asking.',
            'Packed the whole thing into a Docker container so it can be deployed anywhere in seconds.'
        ]
    },
    {
        title: 'Recraftify - Waste AI',
        tech: ['TensorFlow', 'Flask', 'MobileNetV2'],
        image: '/project-re.jpeg',
        desc: 'An image recognition app that tells you exactly how to recycle your trash.',
        details: [
            'Led the AI development for the Recraftify mobile app, building a model that can recognize different types of trash.',
            'Spent hours manually labeling over 23,000 photos of garbage to train the AI (it was worth it).',
            'Hit 95% accuracy by using Transfer Learning with MobileNetV2.',
            'Deployed the AI as a fast REST API so the app gets answers instantly.'
        ]
    },
    {
        title: 'WhatsApp RAG Bot',
        tech: ['Twilio', 'OpenAI', 'AWS', 'Flask'],
        image: '/project-warag.jpeg',
        desc: 'A WhatsApp bot that reads PDFs and chats with customers in real-time.',
        details: [
            'Hooked up a custom AI chatbot straight to WhatsApp using Twilio and OpenAI.',
            'Taught the bot how to read company PDFs so it can answer customer questions automatically.',
            'Hosted everything on AWS so it runs 24/7 without a hitch.'
        ]
    },
    {
        title: 'Sentiment Analysis',
        tech: ['TensorFlow', 'LSTM', 'Regex', 'Python'],
        image: '/project_sentiment.png',
        desc: 'An AI tool that reads tweets and figures out if customers are happy or angry.',
        details: [
            'Analyzed a massive pile of customer tweets about phone companies.',
            'Built an AI that sorts the tweets into "Positive" and "Negative" piles to see what makes customers happy (or mad).',
            'Got the AI (an LSTM model) to guess correctly 92% of the time.'
        ]
    },
    {
        title: 'Coursera Analysis',
        tech: ['Scrapy', 'DeepSeek', 'NLTK'],
        image: '/project_coursera.png',
        desc: 'A deep dive into thousands of Coursera reviews to see what students really think.',
        details: [
            'Scraped and analyzed over 1,300 reviews from Coursera to see how good their platform actually is.',
            'Used large language models to read the reviews and categorize them into specific service quality metrics.',
            'Crunched the numbers using logistic regression to prove the findings statistically.'
        ]
    }
];

const ProjectModal = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!project) return null;

    // Normalize images: use project.images array if available, otherwise fallback to single project.image
    const images = project.images || (project.image ? [project.image] : []);

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
                    padding: '2rem',
                    background: '#ffffff', // Enhance readability for modal
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
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
                        fontSize: '1.5rem',
                        zIndex: 10
                    }}
                >
                    <TbX />
                </button>

                {images.length > 0 && (
                    <div style={{
                        width: '100%',
                        height: '250px',
                        marginBottom: '1.5rem',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '1px solid var(--glass-border)',
                        position: 'relative'
                    }}>
                        <img
                            src={images[currentImageIndex]}
                            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />

                        {/* Navigation Arrows */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    style={{
                                        position: 'absolute',
                                        left: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'rgba(0,0,0,0.5)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '30px',
                                        height: '30px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    ‹
                                </button>
                                <button
                                    onClick={nextImage}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'rgba(0,0,0,0.5)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '30px',
                                        height: '30px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    ›
                                </button>
                                {/* Dots/Indicators */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '10px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    display: 'flex',
                                    gap: '6px'
                                }}>
                                    {images.map((_, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                backgroundColor: idx === currentImageIndex ? 'var(--accent-cyan)' : 'white',
                                                opacity: idx === currentImageIndex ? 1 : 0.5
                                            }}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                )}

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
        <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--bg-color)' }}>
            
            <div style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 className="text-huge" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    visual <br/> <span style={{ color: 'var(--accent-color)' }}>portfolio.</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '500px', textAlign: 'center' }}>
                    A curated selection of my data pipelines, AI models, and automation workflows.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '4rem',
                alignItems: 'start'
            }}>
                {projects.map((proj, index) => (
                    <RevealOnScroll key={index} delay={(index % 2) * 0.1}>
                        <div 
                            onClick={() => setSelectedProject(proj)}
                            style={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                height: '100%',
                                marginTop: typeof window !== 'undefined' && window.innerWidth > 768 && index % 2 !== 0 ? '5rem' : '0', 
                                cursor: 'pointer',
                                transition: 'transform 0.4s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                const img = e.currentTarget.querySelector('img');
                                if (img) img.style.filter = 'grayscale(0%)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                const img = e.currentTarget.querySelector('img');
                                if (img) img.style.filter = 'grayscale(80%)';
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1rem' }}>
                                <span className="serif-text" style={{ fontSize: '3.5rem', color: 'var(--text-primary)', opacity: 0.2, lineHeight: 1 }}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1.1 }}>
                                    {proj.title}
                                </h3>
                            </div>
                            
                            {(proj.image || (proj.images && proj.images.length > 0)) ? (
                                <div className="artsy-shape-1" style={{ width: '100%', height: '280px', marginBottom: '1.5rem', backgroundColor: '#e0e0e0', overflow: 'hidden' }}>
                                    <img 
                                        src={proj.images ? proj.images[0] : proj.image} 
                                        alt={proj.title} 
                                        style={{ 
                                            width: '100%', 
                                            height: '100%', 
                                            objectFit: 'cover', 
                                            filter: 'grayscale(80%)',
                                            transition: 'filter 0.5s ease'
                                        }} 
                                    />
                                </div>
                            ) : (
                                <ProjectVisual 
                                    variant={index % 3 === 0 ? 'pipeline' : index % 3 === 1 ? 'nodes' : 'terminal'} 
                                    title={proj.title} 
                                />
                            )}

                            <p style={{ color: 'var(--text-secondary)', flexGrow: 1, marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                                {proj.desc}
                            </p>
                            
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                                {proj.tech.slice(0, 4).map((t, i) => (
                                    <span key={i} style={{
                                        fontSize: '0.8rem',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        color: 'var(--text-primary)'
                                    }}>
                                        {t}{i < Math.min(proj.tech.length, 4) - 1 ? ' • ' : ''}
                                    </span>
                                ))}
                                {proj.tech.length > 4 && <span style={{ fontSize: '0.8rem', fontWeight: 700 }}> • MORE</span>}
                            </div>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </section>
    );
};

export default Projects;
