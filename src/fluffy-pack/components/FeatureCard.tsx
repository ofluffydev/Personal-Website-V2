import {InView} from "react-intersection-observer";
import {ReactNode} from "react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon?: (props: { className?: string }) => ReactNode;
}

function FeatureCard({title, description, icon}: FeatureCardProps) {
    return (
        <InView>
            {({ inView, ref }) => (
                <div 
                    ref={ref} 
                    className={`
                        text-center bg-gray-800 p-4 rounded-lg
                        ${inView ? 'opacity-100 animated-list-item' : 'opacity-0 pointer-events-none'}
                    `}
                >
                    <h2 className="text-lg sm:text-xl font-bold mb-2">{title}</h2>
                    <div className="w-full flex justify-center items-center h-16 sm:h-20 mb-2">
                        {icon?.({ className: "w-8 h-8 sm:w-12 sm:h-12" })}
                    </div>
                    <p className="text-sm sm:text-base">{description}</p>
                </div>
            )}
        </InView>
    );
}

export default FeatureCard;