import style from "./Intro.module.css";

export default function Intro(){
    return (<div className={style.intro}>
        <div className={style.introduction}>
            <h1>Elias is a <span>web designer</span> and <span>front-end developer</span></h1>
            <p>He crafts responsive websites where technologies <br /> meet creativity</p>
            <a href="#">Contact me!!</a>
        </div>
        <div className={style.pic}></div>
    </div>);
}