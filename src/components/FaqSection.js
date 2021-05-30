import Styled from "styled-components";

import { About } from "../styles";
import Toggle from "./Toggle";

import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      ref={element}
      initial="hidden"
    >
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>

      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>

        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>

        <Toggle title="Diferent Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>

        <Toggle title="What Products Do You Offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = Styled(About)`
    display: block;
    
    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0rem;
        
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;
