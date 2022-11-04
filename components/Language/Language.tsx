import React from "react";
import style from "./Language.module.css";

function Language() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <label className={style.toggle}>
          <input type="checkbox" />
          <span className={style.labels} data-on="ENG" data-off="RUS"></span>
        </label>
      </div>
    </div>
  );
}

export default Language;
