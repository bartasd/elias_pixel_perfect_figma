import ContactCard from "./ContactCard";
import style from "./ContactInfo.module.css";
import discord from '../../assets/Discord.png';
import email from '../../assets/Email.png';

export default function ContactInfo(){
    return (<div className={style.contactInfo}>
        <div className={style.text}>
            <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
        </div>
        <div className={style.cont}>

            <ContactCard
            title="Support me here"
            info={[
                { text: "4149500120690030" },
            ]}
            />

            <ContactCard
            title="Message me here"
            info={[
                { logo: discord, text: "Elias#1234" },
                { logo: email, text: "elias@elias-dev.ml" },
            ]}
            />

        </div>
    </div>);
}