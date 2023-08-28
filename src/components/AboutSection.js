import home1 from "../img/home1.png";

import { useEffect } from "react";

import styled from "styled-components";
import {
  StyledHide,
  StyledAbout,
  StyledDescription,
  StyledImage,
} from "../styles";

const AboutSection = () => {
  // My code
  /* const rowAnimation = [{ transform: "translateY(100%)" }]; */
  /*  const rowAnimDuration = { duration: 2000, iterations: 2 }; */
  /* useEffect(() => {
    const title = document.querySelectorAll(".title h2");
    console.log(title);
    let i = 0;

    title.forEach((row) => {
      row.animate(rowAnimation, { duration: 4000 });
    });
  }, []); */

  // End of my code

  return (
    <StyledAbout>
      <StyledDescription>
        <div className='title'>
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true.</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt='guy with a camera' />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
