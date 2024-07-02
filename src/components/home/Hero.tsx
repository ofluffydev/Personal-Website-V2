import { ArrowRight, Code, Book, Briefcase } from 'lucide-react';

const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Kaden Frisk</h1>
                <p className="text-xl md:text-2xl mb-8">Web Developer | Course Creator | Project Enthusiast</p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="flex items-center">
                        <Code className="mr-2" />
                        <span>Showcasing My Projects</span>
                    </div>
                    <div className="flex items-center">
                        <Briefcase className="mr-2" />
                        <span>Offering Web Services</span>
                    </div>
                    <div className="flex items-center">
                        <Book className="mr-2" />
                        <span>Free Programming Courses</span>
                    </div>
                </div>

                <p className="text-lg mb-8">Connecting my creations and helping others learn programming, all in one place.</p>

                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center hover:bg-blue-100 transition-colors">
                    Explore My Work
                    <ArrowRight className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default Hero;