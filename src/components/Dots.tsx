import style from "./Dots.module.css";

export default function Dots({ w, h }: { w: number; h: number }) {
    const dots = Array.from({ length: w * h });

    return (
        <div
            className={style.container}
            style={{ ['--cols' as any]: w }}
        >
            {dots.map((_, i) => (
                <div key={i} className={style.dot}></div>
            ))}
        </div>
    );
}