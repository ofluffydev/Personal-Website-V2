import {FC} from "react";

/**
 * Props for SimpleHamburger component.
 * @interface
 */
interface SimpleHamburgerProps {
    /** Indicates if the menu is open or not. */
    isOpen: boolean;
    /** Function to toggle the menu open/close state. */
    toggleMenu: () => void;
    /** Optional className for custom styling. */
    className?: string;
}

/**
 * A simple hamburger menu component.
 *
 * This component displays a hamburger icon that toggles between an open and closed state.
 * It accepts a boolean to control the open state, a function to toggle this state, and an optional className for styling.
 *
 * @param {SimpleHamburgerProps} props - The props for the component.
 * @returns The hamburger menu component.
 */
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