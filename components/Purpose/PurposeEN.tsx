import React from "react";
import style from "./Purpose.module.css";

function PurposeEN() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2>What is Coaching?</h2>
        <p>
          A life coach helps to empower the client in making pivotal decisions
          for themselves about their life, work, relationships, and more. Life
          coaching is a collaborative conversation between the coach and client
          that can enable profound change through questions, reflections,
          choices, and new courses of action.
        </p>

        <p>
          It can be challenging to recognize aspects of your life topography
          that are especially key to informing your next steps. With the help of
          a coach’s open, catalytic questions and deep listening, you can
          explore blind spots below the surface that you may struggle to uncover
          yourself, consider fresh perspectives, and identify new solutions.
        </p>
        <p>
          Working with a life coach can be a great way to discover and clarify
          what you really want, and to unearth your skills, talents and gifts
          that you can draw on to bring into reality what gives your life
          meaning.
        </p>

        {/* <div className={style.video}>
          <a href="">Посмотреть Видео</a>
          <div className={style.icon}>
            <a href="">
              <AiFillPlayCircle />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default PurposeEN;
