import Styled from "styled-components";
import { Link } from "react-router-dom";
// images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="Athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="The racer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="Good times" />
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

const Movie = Styled.div`
    padding-bottom: 10rem;

    .line {
        height: 0.5rem;
        background: #ccc;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default OurWork;
