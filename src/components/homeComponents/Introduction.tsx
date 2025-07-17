import style from "./Introduction.module.css";
import image from '../../assets/ellias.png';
import Dots from "../Dots";

export default function Introduction(){
    return (<div className={style.introduction}>
        <div className={style.desc}>
            <p>Hello, i’m Elias!</p>
            <p>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>
            <p>Transforming my creativity and knowledge into a website has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
        </div>
        <div className={style.pic}>
            <div className={style.cont}>
                <img className={style.elias} src={image} alt="elias" />
                <Dots w={5} h={5} top={50} left={-20} />
                <Dots w={5} h={4} bottom={93} right={16} />
            </div>
        </div>
    </div>);
}