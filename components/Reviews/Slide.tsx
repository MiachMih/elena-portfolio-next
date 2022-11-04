import React from "react";
import style from "./Slide.module.css";

interface Props {
  content: JSX.Element;
  author: string;
}

function Slide({ content, author }: Props) {
  return (
    <div className={style.content}>
      <strong>{author}</strong>
      {content}
    </div>
  );
}

export default Slide;
