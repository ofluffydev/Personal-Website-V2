import {Box, Brush, Camera, Car, History} from 'lucide-react';
import WebsiteCard from "../../fluffy-pack/components/WebsiteCard.tsx";

const websiteData = [{
    name: "Toybox Motorsports",
    url: "https://toyboxamarillo.com",
    description: "Website made for the business \"Toybox Motorsports.\"",
    icon: <Car className="w-6 h-6"/>
}, {
    name: "The Photo Store",
    url: "https://thephotostore.com",
    description: "Photography business website. As of writing this, it is currently a website I didn't make, but I'm currently working on one to replace it!",
    icon: <Camera className="w-6 h-6"/>
}, {
    name: "Spinny Car",
    url: "https://spinnycar.kadenfrisk.com/",
    description: "An example of using threejs to render a car in your browser.",
    icon: <Box className="w-6 h-6"/>
}, {
    name: "Loomlabs",
    url: "https://looomlabs.com/",
    description: "A web design agency that I work with, they designed this website and I host it. Visit loomlabs if you need a website design!",
    icon: <Brush className="w-6 h-6"/>
}, {
    name: "My Old Website",
    url: "https://old.kadenfrisk.com/",
    description: "The original website that was on this domain I am no longer updating. Originally it was only for selling websites.",
    icon: <History className="w-6 h-6"/>
},];

function OtherWebsites() {
    return (<div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <h2 className="text-3xl font-extrabold text-center text-white mb-8">
            Explore My Other Websites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {websiteData.map((site, index) => (<WebsiteCard key={index} {...site} />))}
        </div>
    </div>);
}

export default OtherWebsites;