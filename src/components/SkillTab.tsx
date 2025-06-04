import style from "./SkillTab.module.css";

type SkillData = {
  logo: string; 
  langs: string[];
  name: string;
  expl: string;
  live: string;
};

type SkillTabProps = {
  data: SkillData;
};

export default function SkillTab({data} : SkillTabProps){
    return (
        <div className={style.tab}>
            <img className={style.picture} src={data.logo} alt="logo" />
            <div className={style.languages}>
                {data.langs.map((lang, i) => (
                    <p key={i}>{lang}</p>
                ))}
            </div>
            <div className={style.info}>
                <h1>{data.name}</h1>
                <p>{data.expl}</p>
                <a href={data.live}>{"Live <~>"}</a>
            </div>
        </div>
    );
}