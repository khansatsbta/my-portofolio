import React from 'react';
import { TbMapPin, TbArrowUpRight } from 'react-icons/tb';

const Hero = () => {
    return (
        <section id="home" className="section-padding" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '120px' // Account for navbar
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem',
                width: '100%',
                alignItems: 'center'
            }}>

                {/* Left Content - Typography */}
                <div style={{ zIndex: 2 }}>
                    <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span className="serif-text" style={{ fontSize: '2rem' }}>Hey, there</span>
                        <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--text-primary)' }} />
                    </div>

                    <h1 className="text-huge" style={{ marginBottom: '1.5rem', marginTop: '-1rem' }}>
                        khansa <br /> tsabita.
                    </h1>

                    <p style={{
                        maxWidth: '450px',
                        fontSize: '1.15rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '3rem',
                        lineHeight: 1.6
                    }}>
                        I'm a Data Engineer who loves building AI tools. I focus on making data flow seamlessly and creating smart solutions that actually make sense.
                    </p>

                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>+2</span>
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Years Exp</span>
                        </div>
                        <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(0,0,0,0.1)' }} />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>10+</span>
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Projects</span>
                        </div>

                        <a href="#projects" style={{
                            marginLeft: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '65px',
                            height: '65px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--text-primary)',
                            color: 'var(--bg-color)',
                            transition: 'transform 0.3s, background 0.3s',
                            textDecoration: 'none'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.1)';
                                e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                                e.currentTarget.style.color = 'var(--text-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.backgroundColor = 'var(--text-primary)';
                                e.currentTarget.style.color = 'var(--bg-color)';
                            }}
                        >
                            <TbArrowUpRight size={28} />
                        </a>
                    </div>
                </div>

                {/* Right Content - Artsy Image */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                        <div className="artsy-shape-2" style={{
                            width: '100%',
                            aspectRatio: '4/5',
                            backgroundColor: 'var(--accent-color)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                        }}>
                            <img
                                src="/profile.jpg"
                                alt="Khansa Tsabita"
                                className="image-cover"
                                style={{
                                    opacity: 0.95,
                                    filter: 'grayscale(30%) contrast(110%)',
                                    transition: 'all 0.5s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%) contrast(100%)'}
                                onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(30%) contrast(110%)'}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>

                        {/* Location Badge */}
                        <div style={{
                            position: 'absolute',
                            bottom: '40px',
                            left: '-20px',
                            backgroundColor: 'var(--bg-color)',
                            padding: '12px 24px',
                            borderRadius: '100px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            fontWeight: 600,
                            zIndex: 10
                        }}>
                            <TbMapPin size={20} color="var(--accent-color)" />
                            Jakarta / Tangerang
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
