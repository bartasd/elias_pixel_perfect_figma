import style from "./ContactCard.module.css";

interface InfoItem {
    logo?: string;
    text: string;
}

interface ContactCardProps {
    title: string;
    info: InfoItem[];
}

export default function ContactCard({ title, info }: ContactCardProps) {
    return (
        <div className={style.contactCard}>
            <p>{title}</p>
            {info.map((item, i) => (
                <p key={i} className={style.line}>
                    {item.logo && <img src={item.logo} alt="" className={style.icon} />}
                    {item.text}
                </p>
            ))}
        </div>
    );
}
