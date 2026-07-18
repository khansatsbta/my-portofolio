import React from 'react';

const ProjectVisual = ({ variant, title }) => {
    if (variant === 'pipeline') {
        return (
            <div className="artsy-shape-1" style={{ 
                width: '100%', height: '280px', marginBottom: '1.5rem', 
                backgroundColor: 'var(--text-primary)', overflow: 'hidden', position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <svg width="100%" height="100%" viewBox="0 0 400 280" style={{ position: 'absolute', opacity: 0.3 }}>
                    <path d="M 0,140 Q 100,50 200,140 T 400,140" fill="none" stroke="var(--bg-color)" strokeWidth="2" className="dash-anim" />
                    <path d="M 0,100 Q 150,200 250,100 T 400,100" fill="none" stroke="var(--accent-color)" strokeWidth="1" className="dash-anim-slow" />
                    <path d="M 0,180 Q 50,80 150,180 T 400,180" fill="none" stroke="var(--bg-color)" strokeWidth="3" className="dash-anim-fast" />
                </svg>
                <div style={{ color: 'var(--bg-color)', zIndex: 1, fontWeight: 800, fontSize: '1.5rem', letterSpacing: '4px', textTransform: 'uppercase', opacity: 0.5, textAlign: 'center' }}>
                    DATA PIPELINE
                </div>
            </div>
        );
    }
    
    if (variant === 'nodes') {
        return (
            <div className="artsy-shape-1" style={{ 
                width: '100%', height: '280px', marginBottom: '1.5rem', 
                backgroundColor: 'var(--bg-color)', border: '2px solid var(--text-primary)', overflow: 'hidden', position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <div className="pulse-node" style={{ position: 'absolute', top: '30%', left: '20%', width: '10px', height: '10px', backgroundColor: 'var(--accent-color)', borderRadius: '50%' }} />
                <div className="pulse-node" style={{ position: 'absolute', top: '70%', left: '40%', width: '15px', height: '15px', backgroundColor: 'var(--text-primary)', borderRadius: '50%', animationDelay: '0.5s' }} />
                <div className="pulse-node" style={{ position: 'absolute', top: '40%', left: '80%', width: '8px', height: '8px', backgroundColor: 'var(--accent-color)', borderRadius: '50%', animationDelay: '1s' }} />
                
                <svg width="100%" height="100%" style={{ position: 'absolute', opacity: 0.3 }}>
                    <line x1="20%" y1="30%" x2="40%" y2="70%" stroke="var(--text-primary)" strokeWidth="1.5" className="dash-anim" />
                    <line x1="40%" y1="70%" x2="80%" y2="40%" stroke="var(--text-primary)" strokeWidth="1.5" className="dash-anim" />
                    <line x1="20%" y1="30%" x2="80%" y2="40%" stroke="var(--accent-color)" strokeWidth="1.5" className="dash-anim-slow" />
                </svg>
                <div style={{ color: 'var(--text-primary)', zIndex: 1, fontWeight: 800, fontSize: '1.5rem', letterSpacing: '4px', textTransform: 'uppercase', opacity: 0.3, textAlign: 'center' }}>
                    NETWORK GRAPH
                </div>
            </div>
        );
    }

    // Default terminal
    return (
        <div className="artsy-shape-1" style={{ 
            width: '100%', height: '280px', marginBottom: '1.5rem', 
            backgroundColor: '#111', overflow: 'hidden', position: 'relative',
            padding: '2rem', display: 'flex', flexDirection: 'column', gap: '10px'
        }}>
            <div className="typing-line" style={{ color: 'var(--accent-color)', fontFamily: 'monospace', fontSize: '1rem', opacity: 0, animationDelay: '0s' }}>
                > initiating routine...
            </div>
            <div className="typing-line" style={{ color: 'white', fontFamily: 'monospace', fontSize: '1rem', opacity: 0, animationDelay: '1s' }}>
                > building knowledge base...
            </div>
            <div className="typing-line" style={{ color: 'white', fontFamily: 'monospace', fontSize: '1rem', opacity: 0, animationDelay: '2s' }}>
                > system robust.
            </div>
            <div className="cursor-blink" style={{ width: '10px', height: '18px', backgroundColor: 'var(--accent-color)', marginTop: '5px' }} />
        </div>
    );
};

export default ProjectVisual;
