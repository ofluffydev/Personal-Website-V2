function WebsiteDesignAndDevelopment() {
    function goTo(s: string) {
        return () => {
            window.location.href = s;
        }
    }

    return (<div className="bg-gradient-to-br from-red-500 to-purple-500 flex flex-col justify-center p-20 mt-10">
        <h1 className="text-xl font-bold">Website Design and Development</h1>
        <p className="text-sm">
            Tired of your website being lost in the online void? We build unique affordable sites that stand out and
            give your customers the experience they deserve. Our approach involves utilizing current frameworks and
            technologies to ensure your site not only has individuality, but also provides a swift and ideal user
            experience. By optimizing for speed and accessibility, we ensure fast loading times with easy navigation,
            making your website convenient for every user.
        </p>
        <h2 className="text-xl font-bold mt-4">Our services include:</h2>
        <ul className="text-sm list-inside list-disc flex flex-col">
            <li>Custom website design and development</li>
            <li>Responsive web design</li>
            <li>Content management systems (CMS)</li>
            <li>E-commerce websites</li>
            <li>Search engine optimization (SEO)</li>
            <li>Website maintenance and support</li>
        </ul>
        <p className="text-sm mt-4">Whether you need a simple brochure website or a complex e-commerce site, we can
            help you achieve your online goals.</p>
        <button className="bg-white text-black py-2 px-4 mt-4" onClick={goTo('/services/websites')}>Learn More</button>
    </div>);
}

export default WebsiteDesignAndDevelopment;