import React, { useRef, useState } from "react";
import styles from "./Accordion.module.css";
import style from "./Mission.module.css";
import photo1 from "../../assets/photo_3.jpg";
import photo2 from "../../assets/photo_4.jpg";
import Image from "next/image";
import styled from "styled-components";

function MissionEN() {
  function navigate() {
    window.open(
      "https://calendly.com/coach-emotionalintelligence/introduction-session",
      "_blank"
    );
  }

  interface DivProps {
    clientHeight: number | undefined;
    collapsed: boolean;
  }

  const Div = styled.div`
    margin-top: 50px;
    overflow: hidden;
    height: ${({ clientHeight, collapsed = false }: DivProps) => {
      let height = 0;
      if (clientHeight !== undefined) height = clientHeight + 30;
      return collapsed ? height + "px" : "0px";
    }};
    transition: all 600ms ease-in-out;
  `;

  function Accordion() {
    const input = useRef<HTMLInputElement | null>(null);
    const [showMore, setShowMore] = useState<boolean>(false);

    return (
      <div>
        <button
          className={`${styles.btn}`}
          onClick={() => {
            setShowMore((state) => {
              return !state;
            });
          }}
        >
          {!showMore ? "Show More" : "Show Less"}
        </button>
        <Div clientHeight={input?.current?.clientHeight} collapsed={showMore}>
          <div ref={input}>
            <p>
              With a combination of savvy and luck, I landed a job as a social
              media management specialist at a reproductive clinic. It was a new
              beginning for me, as well as the dawn of social media, when this
              position was among the first of its kind. My main task was to
              popularize the advanced medical option of in vitro fertilization
              (IVF), addressing fears and diminishing any stigma surrounding it.
              In this position, I was able to work more regular 9 to 5 hours and
              leave the B2B magazine, while exploring and becoming adept in the
              then new world of digital communication, online marketing, and
              social media. I led strategic content projects, implemented
              marketing campaigns and media business analytics for Fortune 500
              partners, and spearheaded search engine optimization. This has
              equipped me to understand the power of social media in how it can
              impact your business and even your most personal life decisions.
            </p>
            <p>
              Equipped with this further honed skill set, I was able to take the
              leap and seize an opening at a Russian TV show based in the US.
              There I developed a news program and its scripts as well as
              managed advertisement projects. After working with one of our
              program guests, an owner at New Horizons Medical, I was invited to
              join their team first as an Office Manager for a completely new
              branch office. In this role, I faced one of my biggest personal
              and professional challenges as serving people in recovery from
              substance abuse while simultaneously developing staff that could
              effectively serve their needs in a very multicultural environment.
            </p>
            <p>
              Over the course of a year and a half, through leveraging my
              marketing background and consistently achieving high client
              satisfaction with our services, I grew this branch’s clientele
              numbers from zero to 400. I remained eager to deepen my own and my
              staff’s ability to empathize with the struggles experienced by our
              clients and to create personalized solutions for them, rather than
              just mechanically following procedures that are only meant to
              serve as guidelines, not rigid rules.
            </p>
            <p>
              This led me down the path to the principles of coaching and
              becoming trained in applying them. Drawing upon my overall
              background and my formal training in coaching, I can aid you in
              recognizing your own fount of knowledge, that you have the answers
              within to guide you in taking your next steps to cultivate
              wellness and create the life you want.
            </p>
          </div>
        </Div>
      </div>
    );
  }

  return (
    <div id="mission" className={style.container}>
      <div className={style.photos}>
        <Image
          className={style.photo1}
          src={photo1}
          alt="Sitting on the stairs"
        />
        <Image
          className={style.photo2}
          src={photo2}
          alt="Sitting by the window with coffee"
        />
      </div>
      <div className={style.content}>
        <h3>About Me</h3>
        <div className={style.text}>
          <p>
            My love for communicating and connecting with people to help solve
            life problems has deep roots. My father was a civil engineer and my
            mother was a Russian language and literature teacher. After
            graduating high school, I pursued a double major in psychology and
            literature, during which time I volunteered at a women’s crisis
            center and was hired as a middle school russian language and
            literature teacher.
          </p>
          <p>
            Like so many people today, after I graduated university I
            experienced the struggle of balancing work and family life with my
            husband and two children. To put food on the table, my husband
            worked long hours as a warehouse supervisor, and I worked over 8
            hours a day as an editor and manager of a B2B magazine. In this
            role, I visited numerous restaurants and hotels in person and
            attended trade fairs, exhibits, and other networking events. Through
            these interactions I gathered insights on the inner workings of
            multiple businesses.
          </p>
          <Accordion />
          <button className={style.btn} onClick={navigate}>
            Get Started
          </button>
        </div>
        <h3>HOW WILL YOU BENEFIT? Through coaching you will gain:</h3>
        <ul>
          <li>Confidence that you will succeed</li>
          <li>
            Power and determination to take the path that would create the most
            joy and success…as they define it…and ability to be present
          </li>
          <li>
            A detailed plan of milestones and steps to speed up their career
          </li>
          <li>
            Confirmation that the chosen path is truly theirs and serves their
            best interests
          </li>
          <li>
            Courage to keep going and resilience to press through failures
          </li>
          <li>
            Understanding and leveraging your strengths and success strategies
          </li>
          <li>We don&apos;t just succeed. We thrive!</li>
        </ul>
        {/* <div className={style.video}>
          <a href="">Моя миссия и философия</a>
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

export default MissionEN;
