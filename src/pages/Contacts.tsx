import Directory from "../components/Directory";
import ContactInfo from "../components/homeComponents/ContactInfo";
import Media from "../components/homeComponents/Media";
import Markup from "../components/Markup";

export default function Contacts(){
    return (
    <>            
        <Directory dir="contacts" expl="Who am I?"/>
        <ContactInfo />
        <Markup tab="all-media">
        <Media />
        </Markup>
    </>);
}