import style from "./Markup.module.css";
import { Link } from 'react-router-dom';

type MarkupProps = {
  tab: string;
  linkText?: string;
  link?: string;
  children?: React.ReactNode;
  maxWidth?: number | string;
};


export default function Markup({ tab, linkText, link, maxWidth, children }: MarkupProps) {
  return (
    <div className={style.cont}>
        <div className={style.text}>
            
            <div 
                className={style.text2}
                style={{ maxWidth: maxWidth }}
            >
                <p className={style.linkText}><span>#</span>{tab}</p>
                
                {
                    maxWidth && (
                        <div className={style.line}>
                            <div></div>
                            <div></div>
                        </div>
                    )
                }
            </div>


            {link && (
                <Link key={link} to={`/${link}`}>
                {linkText}
                </Link>
            )}
        </div>
        {children && <div className={style.children}>{children}</div>}
    </div>
  );
}
