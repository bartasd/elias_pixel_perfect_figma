import style from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Style=Default.svg';

export default function Header(){

    const location = useLocation();
    const pages = ['home', 'projects', 'about-me', 'contacts'];

    return (
        <div className={style.header}>
            <div></div>
            <div>
                <div className={style.logo}>
                    <img src={logo} alt="logo" />
                    <p>Elias</p>
                </div>
                <div className={style.nav}>
                {pages.map((page) => (
                    <Link
                    key={page}
                    to={`elias_pixel_perfect_figma/${page}`}
                    className={location.pathname === `elias_pixel_perfect_figma/${page}` ? style.active : ''}
                    >
                    <span>#</span>{page}
                    </Link>
                ))}
                    <p>EN</p>
                </div>
            </div>
        </div>
    );
}