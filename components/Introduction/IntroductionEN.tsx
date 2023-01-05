import React from "react";
import style from "./Introduction.module.css";
import photo from "../../assets/photo_1.jpg";
import Image from "next/image";

function Introduction() {
  function navigate() {
    window.open(
      "https://calendly.com/coach-emotionalintelligence/introduction-session",
      "_blank"
    );
  }

  return (
    <div className={style.container}>
      <div className={style.content}>
        <p>Discover the Power of Coaching</p>
        <p>Hello! My name is Elena Shcherbakova. I’m a life coach.</p>
        <p>
          As a life coach I help to empower the client in making pivotal
          decisions for themselves about their life, work, relationships, and
          more. I create a collaborative conversation with my client that can
          enable profound change through questions, reflections, choices, and
          new courses of action.
        </p>
        <button className={style.btn} onClick={navigate}>
          Let&apos;s begin
        </button>
        <footer>30 min introductory session - free</footer>
      </div>
      <div>
        <Image src={photo} alt="Elena photo outside" className={style.photo} />
      </div>
    </div>
  );
}

export default Introduction;
