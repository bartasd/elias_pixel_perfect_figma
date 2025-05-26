import style from "./Quote.module.css";
import quoteImg from "../../assets/quote.png";

type QuoteProps = {
  text: string;
  author: string;
};

export default function Quote({ text, author }: QuoteProps) {
  return (
    <div className={style.cont}>
      <p className={style.quote}>
        <img src={quoteImg} alt="q" />
        {text}
      </p>
      <p className={style.author}>
        <img src={quoteImg} alt="q" />
        {author}
      </p>
    </div>
  );
}
