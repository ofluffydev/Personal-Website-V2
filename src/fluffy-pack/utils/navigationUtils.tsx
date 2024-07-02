import {NavLink} from 'react-router-dom';

interface NavLinkItem {
    path: string;
    label: string;
}

interface GenerateNavItemsProps {
    navLinks: NavLinkItem[];
    isOpen: boolean;
}

export const generateNavItems = ({navLinks, isOpen}: GenerateNavItemsProps) => {
    return navLinks.map((link, index) => (<li
            key={index}
            className={`${link.path === '/' ? 'nav-item' : ''} ${isOpen ? 'visible' : ''}`}
        >
            <NavLink
                to={link.path}
                className="nav-link open-sans-nav-items"
            >
                {link.label}
            </NavLink>
        </li>));
};