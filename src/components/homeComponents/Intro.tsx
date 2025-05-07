import style from "./Intro.module.css";
import Dots from "../Dots";
import logo from '../../assets/Style=Outline.svg';

export default function Intro(){
    return (<div className={style.intro}>
        <div className={style.introduction}>
            <h1>Elias is a <span>web designer</span> and <span>front-end developer</span></h1>
            <p>He crafts responsive websites where technologies <br /> meet creativity</p>
            <a href="#">Contact me!!</a>
        </div>
        <div className={style.pic}>
            {/* NEEDS REARRANGING */}
            <Dots w={5} h={5} />
            <img src="#" alt="elias" />
            <img src={logo} alt="logo" />
            <div className={style.currWork}>
                <div className={style.cubic}></div>
                Currently working on Portfolio
            </div>

        </div>
    </div>);
}