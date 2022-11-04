import React, { useRef, useEffect, useState } from "react";
import style from "./FAQ.module.css";
import styled from "styled-components";

interface AccordionProps {
  question: String;
  content: String;
}

interface DivProps {
  clientHeight: number | undefined;
  collapsed: boolean;
}

const Div = styled.div`
  overflow: hidden;
  height: ${({ clientHeight, collapsed = false }: DivProps) => {
    let height = 0;
    if (clientHeight !== undefined) height = clientHeight + 30;
    return collapsed ? height + "px" : "0px";
  }};
  transition: all 600ms ease-in-out;
`;

function Accordion({ question, content }: AccordionProps) {
  const input = useRef<HTMLInputElement | null>(null);
  const [faq, setFAQ] = useState<boolean>(false);

  const but = "btn";
  const butA = "btn-active";
  return (
    <div className={style.content}>
      <button
        className={`${style[but]} ${faq ? style[butA] : ""}`}
        onClick={() => {
          setFAQ((state) => {
            return !state;
          });
        }}
      >
        {question}
      </button>
      <Div clientHeight={input?.current?.clientHeight} collapsed={faq}>
        <p ref={input}>{content}</p>
      </Div>
    </div>
  );
}

export default Accordion;
