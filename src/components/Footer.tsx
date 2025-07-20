import style from "./Footer.module.css";
import logo from "../assets/Style=Default.svg";
import github from "../assets/Github.png";
import figma from "../assets/Figma.png";
import discord from "../assets/Discord.png";

export default function Footer(){
    return (
        <div className={style.topUnderline}>
            <div className={style.container}>
                <div className={style.intro} >
                    <p><img className={style.logo} src={logo} alt="logo" /> Elias   <span>elias@elias-dev.ml</span></p>
                    <p>Web designer and front-end developer</p>
                </div>
                <div className={style.media} >
                    <p>Media</p>
                    <div className={style.imgs}>
                        <img className={style.logo2} src={github} alt="logo" />
                        <img className={style.logo2} src={figma} alt="logo" />
                        <img className={style.logo2} src={discord} alt="logo" />
                    </div>
                </div>
            </div>
            <p className={style.copyright}>© Copyright 2022. Made by Elias</p>
        </div>
    );
}