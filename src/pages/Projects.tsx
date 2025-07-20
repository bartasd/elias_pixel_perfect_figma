import Directory from "../components/Directory";
import Markup from "../components/Markup";
import SkillTab from "../components/SkillTab";
import WrapContainer from "../components/WrapContainer";
import { skills } from "../assets/skills";
import smallProjects from '../assets/smallProjects.json';
import Card from "../components/Card";

export default function Projects(){
    return (
        <>
            <Directory dir="projects" expl="List of my projects"/>
            <Markup tab="complete-apps">
                <WrapContainer>
                    {skills.map((skill, i) => (
                        <SkillTab key={i} data={skill}/>
                    ))}
                </WrapContainer>
            </Markup>
            <Markup tab="small-projects">
                <WrapContainer>
                    {smallProjects.map((project, i) => (
                        <Card key={i} data={project}/>
                    ))}
                </WrapContainer>
            </Markup>
        </>
    );
}