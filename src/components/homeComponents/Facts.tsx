import style from "./Facts.module.css";
import Dots from "../Dots";
import logo from '../../assets/Style=Outline.svg';

export default function Facts(){
    return (<div className={style.facts}>
            <div className={style.desc}>
                <p>I like winter more than summer</p>
                <p>I often bike with my friends</p>
                <p>I like <span>pizza</span> and <span>pasta</span></p>
                <p>I was in <span>Egypt</span>, <span>Poland</span> and <span>Turkey</span></p>
                <p>My favorite movie is <span>The Green Mile</span></p>
                <p>I am still in school</p>
                <p>I don’t have any siblings</p>
            </div>
            <div className={style.cont}>
                <Dots w={4} h={4} top="25%" left="45%" />
                <img className={style.logo} src={logo} alt="logo" />
            </div>
    </div>);
}