import Styled from "styled-components";
import { Link } from "react-router-dom";
// images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animation
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="Athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie variants={fade} animate={controls} ref={element} initial="hidden">
        <motion.h2>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <motion.img src={theracer} alt="The racer" />
        </Link>
      </Movie>
      <Movie
        variants={fade}
        animate={controls2}
        ref={element2}
        initial="hidden"
      >
        <motion.h2>Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <motion.img src={goodtimes} alt="Good times" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = Styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    
    h2 {
        padding: 1rem 0rem;
    }
`;

const Movie = Styled(motion.div)`
    padding-bottom: 10rem;

    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = Styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = Styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = Styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = Styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = Styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
