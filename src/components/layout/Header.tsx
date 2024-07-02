// Header.tsx
import {useEffect, useState} from "react";
import {NAV_LINKS, WEBSITE_TITLE} from "../../constants";
import {generateNavItems} from "../../fluffy-pack/utils/navigationUtils";
import {SimpleHamburger} from "./../../fluffy-pack/components/SimpleHamburger";

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

    return (<header className="header">
        <div className="logo">
            <span className="brand">{WEBSITE_TITLE}</span>
        </div>
        <nav className={`navigation ${isOpen ? 'open' : ''}`}>
            <ul>
                {generateNavItems({navLinks: NAV_LINKS, isOpen})}
            </ul>
        </nav>
        <SimpleHamburger isOpen={isOpen} toggleMenu={toggleMenu}/>
    </header>);
}