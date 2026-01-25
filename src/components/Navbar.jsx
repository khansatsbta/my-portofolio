import React from 'react';

const Navbar = () => {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem', background: 'var(--gradient-main)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                K
            </div>
            <ul style={{ display: 'flex', gap: '2rem' }}>
                {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                    <li key={item}>
                        <a href={`#${item.toLowerCase()}`} style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
