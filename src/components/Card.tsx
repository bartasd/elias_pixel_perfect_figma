import style from "./Card.module.css";

type CardData = {
    title: string | string[];
    title2?: string;
    desc: string | string[];
    linkName?: string;
    link?: string;
};

type CardProps = {
  data: CardData;
};

export default function SkillTab({data} : CardProps){
    return (
        <div className={style.card}>
            <h1
            className={style.title}
            style={{ fontWeight: data.title2 ? 'normal' : 'bold' }}
            >
                {typeof data.title === 'string' ? (data.title) : (data.title.map((t: string, i: number) => <span key={i}>{t}</span>))}
            </h1>
            { data.title2 && (<h1 className={style.title2}>{data.title2}</h1>)}
            <p className={style.desc}>
            {typeof data.desc === 'string' ?
                data.desc
                : 
                data.desc.map((t: string, i: number) => <span key={i}>{t}</span>)
            }
            </p>

            { data.title2 && (<a href={data.link}>{data.linkName} {"<~>"}</a>)}
        </div>
    );
}