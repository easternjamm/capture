import { styled } from "styled-components";

import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

import { StyledAbout, StyledDescription, StyledImage } from "../styles";

const ServicesSection = () => {
  return (
    <StyledServices>
      <StyledDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <StyledCards>
          <StyledCard>
            <div className='icon'>
              <img src={clock} alt='clock' />
              <h3>Efficient</h3>
            </div>
            <p>Our team values your time and brings up the best solutions.</p>
          </StyledCard>
          <StyledCard>
            <div className='icon'>
              <img src={teamwork} alt='teamwork' />
              <h3>Teamwork</h3>
            </div>
            <p>
              The end product is the result of close collaboration between our
              team members.
            </p>
          </StyledCard>
          <StyledCard>
            <div className='icon'>
              <img src={diaphragm} alt='diaphragm' />
              <h3>Diaphragm</h3>
            </div>
            <p>
              We use the latest technologies and cameras in order to serve you
              only high quality products.
            </p>
          </StyledCard>
          <StyledCard>
            <div className='icon'>
              <img src={money} alt='money' />
              <h3>Affordable</h3>
            </div>
            <p>
              Our prices fit any type of budget and we are flexible when it
              comes to payment methods.
            </p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt='camera' />
      </StyledImage>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  flex-basis: 20rem;
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
`;

export default ServicesSection;
