import style from "./Media.module.css";
import twitter from '../../assets/Twitter.png';

export default function Media(){

    const myMedia = [
        {logo: twitter, text: "@elias"},
        {logo: twitter, text: "@elias"},
    ];


    return (<div className={style.media}>
            {myMedia.map((mediaLine, i) => (
                <p key={i} className={style.mediaLine}>
                    <img src={mediaLine.logo} alt="" className={style.icon} />
                    {mediaLine.text}
                </p>
            ))}
    </div>);
}