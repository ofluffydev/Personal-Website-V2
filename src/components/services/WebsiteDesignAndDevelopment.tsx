import {useState} from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {CircleAlert} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Link} from "react-router-dom";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";

function WebsiteDesignAndDevelopment() {
    const [formData, setFormData] = useState({
        name: '', purpose: '', details: ''
    });

    const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState, [name]: value
        }));
    };

    const handleSelectChange = (value: string) => {
        setFormData(prevState => ({
            ...prevState, purpose: value
        }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        // You can add your submission logic here
    };

    return (<div
            className="bg-gradient-to-br from-red-500 to-purple-500 flex flex-col justify-center sm:p-20 pt-10 p-5 mt-10">
            <h1 className="text-xl font-bold">Website Design and Development</h1>
            <p className="text-sm">
                Tired of your website being lost in the online void? We build unique affordable sites that stand out and
                give your customers the experience they deserve. Our approach involves utilizing current frameworks and
                technologies to ensure your site not only has individuality, but also provides a swift and ideal user
                experience. By optimizing for speed and accessibility, we ensure fast loading times with easy
                navigation,
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
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="text-black py-2 px-4 mt-4" variant="outline">Request a website</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-black rounded-2xl">
                    <DialogHeader>
                        <DialogTitle className="bg-black">Request a Website</DialogTitle>
                        <DialogDescription className="bg-black text-white">
                            We will respond as soon as possible with details and possibly a price quote depending on the
                            complexity of your request.
                        </DialogDescription>
                        <Alert className={'bg-red-400 border-red-600 justify-center mb-3'}>
                            <CircleAlert/>
                            <AlertTitle>Testing Only</AlertTitle>
                            <AlertDescription>This form is now submittable, but please <Link className="underline"
                                                                                             to="/contact">email
                                me</Link> if
                                you need a website</AlertDescription>
                        </Alert>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center space-x-2">
                            <div className="grid flex-1 gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    className="bg-black"
                                    placeholder="Name"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                                <Label htmlFor="purpose">Website Purpose</Label>
                                <Select onValueChange={handleSelectChange} value={formData.purpose} required>
                                    <SelectTrigger className="bg-black">
                                        <SelectValue placeholder="Select a purpose"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup className="bg-black text-white">
                                            <SelectLabel>Website Purpose</SelectLabel>
                                            <SelectItem value="business">Promote my business or services</SelectItem>
                                            <SelectItem value="portfolio">Showcase my portfolio or work</SelectItem>
                                            <SelectItem value="blog">Start a blog or share content</SelectItem>
                                            <SelectItem value="ecommerce">Sell products online</SelectItem>
                                            <SelectItem value="personal">Create a personal brand or resume</SelectItem>
                                            <SelectItem value="nonprofit">Support a nonprofit or cause</SelectItem>
                                            <SelectItem value="education">Provide educational resources</SelectItem>
                                            <SelectItem value="community">Build an online community</SelectItem>
                                            <SelectItem value="events">Promote and manage events</SelectItem>
                                            <SelectItem value="other">Other (Please specify)</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Label htmlFor="details">Details</Label>
                                <Textarea
                                    id="details"
                                    name="details"
                                    value={formData.details}
                                    onChange={handleInputChange}
                                    className="bg-black text-white"
                                    required
                                />
                            </div>
                        </div>
                        <DialogFooter className="sm:justify-start mt-4">
                            <Button type="submit" variant="secondary">
                                Submit
                            </Button>
                            <DialogClose asChild>
                                <Button type="button" variant="secondary">
                                    Close
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>);
}

export default WebsiteDesignAndDevelopment;