import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

const websiteTitle = 'Title';

const navLinks = [
    {path: '/', label: 'Home'},
    {path: '/contact', label: 'Contact'},
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="header">
            <div className="logo">
                <span className="brand">{websiteTitle}</span>
            </div>
            <nav className={`navigation ${isOpen ? 'open' : ''}`}>
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index} className={`${link.path === '/' ? 'nav-item' : ''} ${isOpen ? 'visible' : ''}`}>
                            <NavLink to={link.path} className="nav-link open-sans-nav-items">{link.label}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
}