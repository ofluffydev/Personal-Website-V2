import {ChangeEvent, FC, FormEvent, ReactNode, useState} from 'react';
import {Globe, Mail, MailWarning, Phone} from 'lucide-react';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';

interface ContactProps {
    email?: string;
    phone?: string;
    website?: string;
    discordUser?: string;
    discordServer?: string;
    x?: string;
    github?: string;
    includeForm?: boolean;
}

const Contact: FC<ContactProps> = ({
                                       email, phone, website, discordUser, discordServer, x, github, includeForm = false
                                   }) => {
    const [formData, setFormData] = useState({
        name: '', email: '', message: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData, [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        // For now, we'll just log it and set formSubmitted to true
        console.log('Form data submitted:', formData);
        setFormSubmitted(true);
        // Reset form after submission
        setFormData({name: '', email: '', message: ''});
    };

    const ContactItem: FC<{ icon: ReactNode; label: string; value: string; href?: string }> = ({
                                                                                                   icon,
                                                                                                   label,
                                                                                                   value,
                                                                                                   href
                                                                                               }) => (
        <div className="flex items-center mb-4">
            {icon}
            <span className="ml-2 font-semibold">{label}:</span>
            {href ? (
                <a href={href} className="ml-2 text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    {value}
                </a>) : (<span className="ml-2">{value}</span>)}
        </div>);

    return (<section className="mt-10 py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {email && (<ContactItem
                    icon={<Mail className="w-5 h-5 text-blue-500"/>}
                    label="Email"
                    value={email}
                    href={`mailto:${email}`}
                />)}
                {phone && (<ContactItem
                    icon={<Phone className="w-5 h-5 text-blue-500"/>}
                    label="Phone"
                    value={phone}
                    href={`tel:${phone}`}
                />)}
                {website && (<ContactItem
                    icon={<Globe className="w-5 h-5 text-blue-500"/>}
                    label="Website"
                    value={website}
                    href={website}
                />)}
                {discordUser && (<ContactItem
                    icon={<img className="w-5 h-5" src="https://cdn.simpleicons.org/discord/3B82F6"
                               alt="Discord Logo"/>}
                    label="Discord User"
                    value={discordUser}
                />)}
                {discordServer && (<ContactItem
                    icon={<img className="w-5 h-5" src="https://cdn.simpleicons.org/discord/3B82F6"
                               alt="Discord Logo"/>}
                    label="Discord Server"
                    value="Join Our Server"
                    href={discordServer}
                />)}
                {x && (<ContactItem
                    icon={<img className="w-5 h-5" src="https://cdn.simpleicons.org/x/3B82F6" alt="X Logo"/>}
                    label="X"
                    value={`@${x}`}
                    href={`https://x.com/${x}`}
                />)}
                {github && (<ContactItem
                    icon={<img className="w-5 h-5" src="https://cdn.simpleicons.org/github/3B82F6"
                               alt="GitHub Logo"/>}
                    label="GitHub"
                    value={github}
                    href={`https://github.com/${github}`}
                />)}
            </div>

            {includeForm && (<>
                <Alert className={'bg-red-400 border-red-600 justify-center mb-3'}>
                    <MailWarning className={'red'}/>
                    <AlertTitle>Testing Only</AlertTitle>
                    <AlertDescription>This form doesn't send emails anywhere yet. For now, please use any of the methods
                        above to contact me.</AlertDescription>
                </Alert>
                <form onSubmit={handleSubmit} className="text-black space-y-4">
                    <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}/>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}/>
                    <Textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}/>
                    <Button type="submit"
                            className="w-full hover:shadow-purple-400 hover:shadow-2xl hover:bg transition-shadow duration-500">
                        Send Message
                    </Button>
                </form>
            </>)}

            {formSubmitted && (<Alert className="mt-4">
                <AlertDescription>
                    Thank you for your message. We'll get back to you soon!
                </AlertDescription>
            </Alert>)}
        </div>
    </section>);
};

export default Contact;