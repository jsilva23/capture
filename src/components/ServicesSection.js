//Images
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//styles
import Styled from "styled-components";
import { About, Description, Image } from "../styles";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      ref={element}
      initial="hidden"
    >
      <Description>
        <h2>
          Hight <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>

      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
};

const Services = Styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }

  @media (max-width: 1500px) {
    display: block;
    padding: 2rem 2rem;
  }
`;

const Cards = Styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1500px) {
    justify-content: center;
  }
`;

const Card = Styled.div`
  flex-basis: 15rem;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }

  @media (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default ServicesSection;
