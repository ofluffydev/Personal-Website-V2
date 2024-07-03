import {ReactElement} from "react";

/**
 * `Hero` component props definition.
 */
interface HeroProps {
    /** Text to display as the main greeting or welcome message. */
    welcomeText: string;
    /** Text to display as a secondary message or information. */
    secondaryText: string;
}

/**
 * Renders a Hero section with a dynamic background gradient and text.
 *
 * This component displays a full-screen hero section with a colorful, animated background gradient.
 * It shows a welcome message and a secondary text, both of which are customizable through props.
 *
 * @param {HeroProps} props - The props for the Hero component.
 * @returns {ReactElement} The Hero section as a React element.
 */
const Hero = ({welcomeText, secondaryText}: HeroProps): ReactElement => {
    return (<div className="relative h-screen flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x"></div>

            <div className="relative z-10 text-center">
                <h1 className="text-6xl font-bold text-white mb-4 animated-list-item">
                    {welcomeText}
                </h1>
                <p className="text-xl text-white animate-fade-in-up animated-list-item ">
                    {secondaryText}
                </p>
            </div>
        </div>);
};

export default Hero;