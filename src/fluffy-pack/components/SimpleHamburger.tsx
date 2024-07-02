import {FC} from "react";

interface SimpleHamburgerProps {
    isOpen: boolean;
    toggleMenu: () => void;
    className?: string;
}

export const SimpleHamburger: FC<SimpleHamburgerProps> = ({ isOpen, toggleMenu, className = '' }) => {
    return (
        <div
            className={`hamburger ${isOpen ? 'open' : ''} ${className}`}
            onClick={toggleMenu}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};
