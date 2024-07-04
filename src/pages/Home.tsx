import Hero from "../fluffy-pack/components/Hero.tsx";
import AboutMe from "../fluffy-pack/components/AboutMe.tsx";
import CoursesSection from "../components/home/CoursesSection.tsx";
import OtherWebsites from "../components/home/OtherWebsites.tsx";
import Repositories from "@/components/home/Repositories.tsx";

const roles = ['Web Developer', 'Course Creator', 'Project Enthusiast'];

function Home() {
    return (<div className={'homePage'}>
        <Hero welcomeText={'Welcome!'} secondaryText={'Kaden\'s corner of the internet'}/>
        <AboutMe tinyText={'Short Section About Me :D'} buttonText={'Explore My Work'} name={'Kaden Frisk'}
                 roles={roles}
                 shortDescription={'Connecting my creations and helping others learn programming, all in one place.'}/>
        <CoursesSection/>
        <OtherWebsites/>
        <Repositories/>
    </div>)
}

export default Home;