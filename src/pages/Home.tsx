import Intro from "../components/homeComponents/Intro";
import Quote from "../components/homeComponents/Quote";
import Markup from "../components/Markup";

export default function Home(){
    return (
        <>
            <Intro />
            <Quote 
                text="With great power comes great electricity bill" 
                author="- Dr. Who" 
            />
            <Markup tab="projects" maxWidth={700} linkText="View all ~~>" link="projects">

            </Markup>
            <Markup tab="skills" maxWidth={390}>

            </Markup>
            <Markup tab="about-me" maxWidth={510}>

            </Markup>
            <Markup tab="contacts" maxWidth={310}>

            </Markup>
        </>
    );
}