import Card from "../components/Card";
import Directory from "../components/Directory";
import Markup from "../components/Markup";
import WrapContainer from "../components/WrapContainer";
import ab_skills from '../assets/about_skills.json';
import Introduction from "../components/homeComponents/Introduction";
import Facts from "../components/homeComponents/Facts";

export default function About(){
    return (
    <>            
        <Directory dir="about-me" expl="Who am I?"/>
        <Introduction />
        <Markup tab="skills">
                <WrapContainer>
                    {ab_skills.map((project, i) => (
                        <Card key={i} data={project}/>
                    ))}
                </WrapContainer>
        </Markup>
        <Markup tab="my-fun-facts">
            <Facts />
        </Markup>
    </>);
}