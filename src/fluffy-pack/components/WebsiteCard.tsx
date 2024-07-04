import { ReactElement } from "react";
import { ExternalLink } from "lucide-react";
import { InView } from "react-intersection-observer";

interface WebsiteCardProps {
    name: string;
    url: string;
    image?: string;
    description: string;
    icon: ReactElement;
}

const WebsiteCard = ({ name, url, image, description, icon }: WebsiteCardProps) => (
    <InView threshold={0.1}>
        {({ inView, ref }) => (
            <div
                ref={ref}
                className={`bg-gradient-to-br from-purple-700 to-indigo-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full ${
                    inView ? 'opacity-100 animated-list-item' : 'opacity-0 pointer-events-none'
                }`}
            >
                <div className="flex items-center mb-4">
                    {icon}
                    <h3 className="text-xl font-bold ml-2 text-white">{name}</h3>
                </div>
                {image && (
                    <div className="mb-4 w-full">
                        <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
                    </div>
                )}
                <p className="text-purple-200 mb-4 flex-grow">{description}</p>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded transition-colors duration-300"
                >
                    Visit Site
                    <ExternalLink className="w-4 h-4 ml-2" />
                </a>
            </div>
        )}
    </InView>
);

export default WebsiteCard;