import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import style from "./MessageMe.module.css";
import { ToastProvider } from "react-toast-notifications";
import ToastFormEN from "./ToastFormEN";

function MessageMeEN() {
  return (
    <div id="message" className={style.all}>
      <h2>Message Me</h2>
      <div className={style.container}>
        <div className={style.options}>
          <article className={style.option}>
            <AiOutlineMail className={style.icon} />
            <h4>Email</h4>
            <h5 className={style.selectable}>
              coach.emotionalintelligence@gmail.com{" "}
            </h5>
            <a
              href="mailto:coach.emotionalintelligence@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send Message
            </a>
          </article>
          <article className={style.option}>
            <BsInstagram className={style.icon} />
            <h4>Instagram</h4>
            <h5>Elena</h5>
            <a
              href="https://www.instagram.com/stories/highlights/17904546808660910/"
              target="_blank"
              rel="noreferrer"
            >
              Send Message
            </a>
          </article>
          {/* <article className={style.option}>
            <BsWhatsapp className={style.icon} />
            <h4>Whatsapp</h4>
            <h5 className={style.selectable}>+1 (857) 221-2583</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+18572212583"
              target="_blank"
              rel="noreferrer"
            >
              Отправить Сообщение
            </a>
          </article> */}
        </div>
        <ToastProvider>
          <ToastFormEN />
        </ToastProvider>
      </div>
    </div>
  );
}

export default MessageMeEN;
