import React from 'react';

const NAV_ITEMS = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];

const Navbar = () => {
    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: '0.9rem 5%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem 1.5rem',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(248, 247, 244, 0.85)',
                borderBottom: '1px solid var(--border-subtle)',
            }}
        >
            <a
                href="#home"
                style={{
                    fontWeight: 900,
                    fontSize: '1.6rem',
                    letterSpacing: '-0.04em',
                    color: 'var(--text-primary)',
                }}
            >
                K<span style={{ color: 'var(--accent-color)' }}>.</span>
            </a>
            <ul
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem 1.5rem',
                    alignItems: 'center',
                }}
            >
                {NAV_ITEMS.map((item) => (
                    <li key={item}>
                        <a
                            href={`#${item.toLowerCase()}`}
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                color: 'var(--text-primary)',
                            }}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
