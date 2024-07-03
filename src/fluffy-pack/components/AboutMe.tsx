import {ArrowRight, Book, Briefcase, Code} from 'lucide-react';
import {FC, ReactElement} from "react";
import {InView} from "react-intersection-observer";

/**
 * Props for the AboutMe component.
 * @prop {string} name - The name of the person.
 * @prop {string[]} roles - An array of roles or titles.
 * @prop {string} [tinyText] - Optional small introductory text.
 * @prop {string} [shortDescription] - Optional short description about the person.
 * @prop {string} buttonText - Text for the main action button.
 */
interface AboutMeProps {
    name: string;
    roles: string[];
    tinyText?: string;
    shortDescription?: string;
    buttonText: string;
}

/**
 * A functional component to display information about a person, including their name, roles, and a short description.
 * It also showcases projects, services, and courses with a call-to-action button.
 *
 * @param {AboutMeProps} props - The props for the component.
 * @returns {ReactElement} The AboutMe component.
 */
const AboutMe: FC<AboutMeProps> = ({
                                       name, roles, tinyText, shortDescription, buttonText
                                   }: AboutMeProps): ReactElement => (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
            <InView>
                {({ inView, ref}) => (
                <p ref={ref} className={inView? 'animated-list-item' : ''}>{tinyText}</p>
                )}
            </InView>
            <h1 className="animated-list-item text-4xl md:text-6xl font-bold mb-4">{name}</h1>
            <p className="animated-list-item text-xl md:text-2xl mb-8">{roles.map((role, index) => <span
                key={index}>{role}{index < roles.length - 1 ? ', ' : ''}</span>)}</p>

            <div className="animated-list-item grid md:grid-cols-3 gap-8 mb-12">
                <div className="animated-list-item flex items-center">
                    <Code className="animated-list-item mr-2"/>
                    <span>Showcasing My Projects</span>
                </div>
                <div className="animated-list-item flex items-center">
                    <Briefcase className="animated-list-item mr-2"/>
                    <span>Offering Web Services</span>
                </div>
                <div className="animated-list-item flex items-center">
                    <Book className="animated-list-item mr-2"/>
                    <span>Free Programming Courses</span>
                </div>
            </div>

            <p className="animated-list-item text-lg mb-8">{shortDescription}</p>

            <button
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center hover:bg-blue-100 transition-colors">
                {buttonText}
                <ArrowRight className="ml-2"/>
            </button>
        </div>
    </div>);

export default AboutMe;