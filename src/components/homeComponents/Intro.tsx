import style from "./Intro.module.css";
import Dots from "../Dots";
import logo from '../../assets/Style=Outline.svg';
import image from '../../assets/Image.png';
import { Link } from 'react-router-dom';

export default function Intro(){
    return (<div className={style.intro}>
        <div className={style.introduction}>
            <h1>Elias is a <span>web designer</span> and <span>front-end developer</span></h1>
            <p>He crafts responsive websites where technologies <br /> meet creativity</p>
            <Link key="contact" to={`/contacts`}> Contact Me! </Link>
        </div>
        <div className={style.pic}>
            <Dots w={5} h={5} bottom={93} right={16} />
            <img className={style.logo} src={logo} alt="logo" />
            <div className={style.cont}>
                <img className={style.elias} src={image} alt="elias" />
                <div className={style.currWork}>
                    <div className={style.cubic}></div>
                    <p>Currently working on <span>Portfolio</span></p>
                </div>
            </div>
        </div>
    </div>);
}