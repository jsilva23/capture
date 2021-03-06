import { motion } from "framer-motion";
import Styled from "styled-components";

export const About = Styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1500px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Description = Styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  
  h2 {
    font-weight: lighter;
  }

  @media (max-width: 1500px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Image = Styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }

  @media (max-width: 1500px) {
    img {
      width: 100%;
    }
  }

`;

export const Hide = Styled.div`
  overflow: hidden;
`;
