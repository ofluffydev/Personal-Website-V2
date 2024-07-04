import {InView} from "react-intersection-observer";

interface FeatureCardProps {
    title: string;
    description: string;
    icon?: (props: { className?: string }) => React.ReactNode;
    }

function FeatureCard({title, description, icon}: FeatureCardProps) {
    return <InView>
    {({ inView, ref }) =>
    <div ref={ref} className={`text-center bg-gray-800 m-3 p-2 w-1/5 ${inView? 'opacity-100 animated-list-item' : 'opacity-0 pointer-events-none'}`}>
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="w-full flex justify-center items-center h-20">
            {icon?.({ className: "w-12 h-12" })}
        </div>
        <p>{description}</p>
    </div>}
    </InView>
}

export default FeatureCard;