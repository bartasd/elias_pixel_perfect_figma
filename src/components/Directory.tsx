import style from "./Directory.module.css";

type DirectoryProps = {
    dir: string;
    expl: string;
}

export default function Directory({dir, expl} : DirectoryProps){
    return (
        <div className={style.cont}>
            <h1><span>/</span>{dir}</h1>
            <p>{expl}</p>
        </div>
    );
}