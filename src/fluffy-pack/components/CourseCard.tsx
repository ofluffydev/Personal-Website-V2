import {FC} from "react";

interface CourseCardProps {
    image: string | { default: string };
    title: string;
    description: string;
    disabled?: boolean;
    url: string;
}

const CourseCard: FC<CourseCardProps> = ({ image, title, description, disabled = false, url }: CourseCardProps) => {
    const imageSrc = typeof image === 'string' ? image : image.default;

    const linkClasses = `
        py-2 px-4 rounded self-start inline-block no-underline
        ${disabled
        ? 'bg-gray-600 cursor-not-allowed'
        : 'bg-purple-800 hover:bg-purple-600 transition-colors duration-300'}
        text-white
    `;

    return (
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-purple-400 hover:-translate-y-2 flex flex-col h-full w-full max-w-sm">
            <div className="h-48 overflow-hidden">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                <p className="text-purple-300 mb-4 flex-grow">{description}</p>
                {disabled ? (
                    <span className={linkClasses}>
                        Learn More
                    </span>
                ) : (
                    <a
                        href={url}
                        className={linkClasses}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn More
                    </a>
                )}
            </div>
        </div>
    );
};

export default CourseCard;