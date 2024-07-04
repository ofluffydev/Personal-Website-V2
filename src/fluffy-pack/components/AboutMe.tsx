import {ArrowBigDown, Book, Briefcase, Code} from 'lucide-react';
import {FC, ReactElement} from "react";
import {InView} from "react-intersection-observer";

/**
 * Props for the AboutMe component.
 * @prop {string} name - The name of the person.
 * @prop {string[]} roles - An array of roles or titles.
 * @prop {string} [tinyText] - Optional small introductory text.
 * @prop {string} [shortDescription] - Optional short description about the person.
 * @prop {string} hookText - Text for the main action button.
 */
interface AboutMeProps {
    name: string;
    roles: string[];
    tinyText?: string;
    shortDescription?: string;
    hookText: string;
}

/**
 * A functional component to display information about a person, including their name, roles, and a short description.
 * It also showcases projects, services, and courses with a call-to-action button.
 *
 * @param {AboutMeProps} props - The props for the component.
 * @returns {ReactElement} The AboutMe component.
 */
const AboutMe: FC<AboutMeProps> = ({
                                       name, roles, tinyText, shortDescription, hookText
                                   }: AboutMeProps): ReactElement => (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
            <InView threshold={0.1}>
                {({inView, ref}) => (<p ref={ref} className={inView ? 'opacity-100 animated-list-item' : 'opacity-0 pointer-events-none'}>{tinyText}</p>)}
            </InView>
            <InView threshold={0.1}>
                {({inView, ref}) => (<h1 ref={ref}
                                         className={`text-4xl md:text-6xl font-bold mb-4 ${inView ? 'opacity-100 animated-list-item' : 'opacity-0 pointer-events-none'}`}>{name}</h1>)}
            </InView>

            <InView threshold={0.1}>
                {({inView, ref}) => (<p ref={ref}
                                        className={`text-xl md:text-2xl mb-8 ${inView ? 'opacity-100 animated-list-item' : 'opacity-0 pointer-events-none'}`}>{roles.map((role, index) =>
                    <span
                        key={index}>{role}{index < roles.length - 1 ? ' | ' : ''}</span>)}</p>)}
            </InView>

            <InView threshold={0.1}>
                {({inView, ref}) => (<div ref={ref}
                                          className={`grid md:grid-cols-3 gap-8 mb-12 ${inView ? 'opacity-100 animated-list-item' : 'opacity-0 pointer-events-none'}`}>
                        <div className="flex items-center">
                            <Code className="mr-2"/>
                            <span>Showcasing My Projects</span>
                        </div>
                        <div className="flex items-center">
                            <Briefcase className="mr-2"/>
                            <span>Offering Web Services</span>
                        </div>
                        <div className="flex items-center">
                            <Book className="mr-2"/>
                            <span>Free Programming Courses</span>
                        </div>
                    </div>)}
            </InView>

            <InView threshold={0.1}>
                {({inView, ref}) => (<p ref={ref} className={`text-lg mb-8 ${inView ? 'opacity-100 animated-list-item' : 'opacity-0 pointer-events-none'}`}>{shortDescription}</p>)}
            </InView>
            <h2
                className="text-white px-6 py-3 rounded-full font-semibold flex items-center">
                {hookText}
                <ArrowBigDown className="ml-2"/>
            </h2>
        </div>
    </div>);

export default AboutMe;