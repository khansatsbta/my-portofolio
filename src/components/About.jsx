import React from 'react';
import { TbBolt, TbBarbell, TbCoffee, TbDeviceGamepad2, TbMoonStars } from 'react-icons/tb';

const About = () => {
    return (
        <section id="about" style={{ width: '100%', overflow: 'hidden' }}>
            
            {/* Dark Marquee Section */}
            <div className="dark-section" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                <div className="marquee-container">
                    <div className="marquee-content">
                        about . about . about . about . about . about . about . about . about . about . 
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="section-padding" style={{ backgroundColor: 'var(--bg-color)' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '6rem',
                    alignItems: 'start',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    
                    {/* Left - Bio */}
                    <div>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '2rem', lineHeight: 1, letterSpacing: '-0.03em' }}>
                            beyond <br/> the <span className="serif-text" style={{ color: 'var(--accent-color)', fontSize: '4rem' }}>code</span>
                        </h2>
                        
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                            I started out studying Information Systems because I loved seeing how data flows behind the scenes. Pretty soon, I realized I didn't just want to organize data—I wanted to do cool things with it!
                        </p>
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                            Going from a Data Science Intern to a Data Engineer showed me the big picture. Now, whether I'm building pipelines or playing with AI, my goal is always the same: 
                        </p>
                        <p className="serif-text" style={{ 
                            fontSize: '1.6rem', 
                            color: 'var(--text-primary)', 
                            marginTop: '2.5rem', 
                            borderLeft: '4px solid var(--accent-color)', 
                            paddingLeft: '1.5rem' 
                        }}>
                            "Make the complicated stuff feel effortless and maybe a little bit like magic."
                        </p>
                    </div>

                    {/* Right - Fun Facts in an editorial list */}
                    <div style={{ 
                        borderTop: '3px solid var(--text-primary)', 
                        paddingTop: '2rem' 
                    }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Personal Traits
                        </h3>
                        
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1.5rem', flexWrap: 'wrap' }}>
                                <TbBolt size={26} color="var(--accent-color)"/>
                                <span style={{ fontSize: '1.15rem', fontWeight: 600 }}>ESTP Personality</span>
                                <span style={{ marginLeft: 'auto', color: 'var(--text-secondary)', fontStyle: 'italic' }}>Energetic & Action-Oriented</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1.5rem', flexWrap: 'wrap' }}>
                                <TbBarbell size={26} color="var(--text-primary)"/>
                                <span style={{ fontSize: '1.15rem', fontWeight: 600 }}>Fitness Enthusiast</span>
                                <span style={{ marginLeft: 'auto', color: 'var(--text-secondary)', fontStyle: 'italic' }}>Disciplined & Resilient</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1.5rem', flexWrap: 'wrap' }}>
                                <TbCoffee size={26} color="var(--accent-color)"/>
                                <span style={{ fontSize: '1.15rem', fontWeight: 600 }}>Powered by Latte</span>
                                <span style={{ marginLeft: 'auto', color: 'var(--text-secondary)', fontStyle: 'italic' }}>Can't code without it</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1.5rem', flexWrap: 'wrap' }}>
                                <TbDeviceGamepad2 size={26} color="var(--text-primary)"/>
                                <span style={{ fontSize: '1.15rem', fontWeight: 600 }}>Indie Rock & Gaming</span>
                                <span style={{ marginLeft: 'auto', color: 'var(--text-secondary)', fontStyle: 'italic' }}>Unwinding with good vibes</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <TbMoonStars size={26} color="var(--accent-color)"/>
                                <span style={{ fontSize: '1.15rem', fontWeight: 600 }}>Night Owl Coder</span>
                                <span style={{ marginLeft: 'auto', color: 'var(--text-secondary)', fontStyle: 'italic' }}>Best commits happen at 2 AM</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
