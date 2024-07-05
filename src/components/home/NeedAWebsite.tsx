import FeatureCard from "@/fluffy-pack/components/FeatureCard.tsx";
import {MobileIcon} from "@radix-ui/react-icons";
import {LineChart, ListChecks, Rabbit, Search, ShoppingCart} from "lucide-react";
import {Link} from "react-router-dom";
import {InView} from "react-intersection-observer";

function NeedAWebsite() {
    const features = [{
        title: "Dynamic",
        icon: (props: { className?: string }) => <MobileIcon {...props} />,
        description: "Your website available on every platform."
    }, {
        title: "Fast",
        icon: (props: { className?: string }) => <Rabbit {...props} />,
        description: "Near instant load times no matter where your users are."
    }, {
        title: "Specific",
        icon: (props: { className?: string }) => <ListChecks {...props} />,
        description: "Customization offered nowhere else."
    }, {
        title: "SEO Optimization",
        icon: (props: { className?: string }) => <Search {...props} />,
        description: "Improves search engine rankings and visibility"
    }, {
        title: "E-commerce",
        icon: (props: { className?: string }) => <ShoppingCart {...props} />,
        description: "Online store functionality for your business."
    }, {
        title: "Analytics ",
        icon: (props: { className?: string }) => <LineChart {...props} />,
        description: "Track your website's performance and user behavior."
    }];

    return (
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 flex flex-col p-6 md:p-12 lg:p-20 text-left justify-center">
            <InView>
                {({inView, ref}) => (
                    <div ref={ref}
                         className={`${inView ? 'opacity-100 animated-list-item' : 'opacity-0 pointer-events-none'} mb-8`}>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">Need a Website?</h1>
                        <h3 className="text-lg md:text-xl mt-2">Customized websites for use at any scale</h3>
                        <h2 className="text-xl md:text-2xl mt-4">
                            We build everything from simple static site to full-scale business websites with
                            account and shopping functionality.
                        </h2>
                    </div>
                )}
            </InView>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        title={feature.title}
                        icon={feature.icon}
                        description={feature.description}
                    />
                ))}
            </div>
            <p className="text-center mt-8 text-sm sm:text-base">
                Learn more in the <Link to="/services"
                                        className="text-purple-200 hover:text-purple-400 underline">services</Link> section
                or <Link to="/contact" className="text-purple-200 hover:text-purple-400 underline">contact us</Link> today
                for more information!
            </p>
        </div>
    );
}

export default NeedAWebsite;