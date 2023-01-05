import React, { useState } from "react";
import style from "./Language.module.css";
import { useRouter } from "next/router";

interface LanguageProps {
  children: JSX.Element;
}

const langOptions = {
  ru: "RUS",
  en: "ENG",
};

function Language({ children }: LanguageProps) {
  const router = useRouter();

  function onClickHandler() {
    router.pathname === "/ru" ? router.replace("/en") : router.replace("/ru");
  }

  return (
    <div className={style.container}>
      <div className={style.content}>
        <label className={style.toggle}>
          <input type="checkbox" checked={router.pathname === "/en"} />
          <span
            onClick={onClickHandler}
            className={style.labels}
            data-en={langOptions.en}
            data-ru={langOptions.ru}
          />
        </label>
      </div>
      {children}
    </div>
  );
}

export default Language;
