import style from "./Dots.module.css";

interface DotsProps {
    w: number;
    h: number;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

export default function Dots({ w, h, top, right, bottom, left }: DotsProps) {
    const dots = Array.from({ length: w * h });

    return (
        <div
            className={style.container}
            style={{ 
                ['--cols' as any]: w,
                position: 'absolute',
                top,
                right,
                bottom,
                left,
            }}
        >
            {dots.map((_, i) => (
                <div key={i} className={style.dot}></div>
            ))}
        </div>
    );
}