import { styled } from "styled-components";
import { StyledAbout } from "../styles";

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <div className='question'>
        <h4>How do i start</h4>
        <div className='answer'>
          <p>In order to start you have to follow some simple steps.</p>
          <p>
            After you're contacting us via e-mail with a short presentation
            about your project and ideas, we'll put you in contact with one of
            our teams.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>Daily schedule</h4>
        <div className='answer'>
          <p>We are available 14 hours a day, 5 days a week.</p>
          <p>
            Having multiple teams that work on different time zones allows us to
            be available for you even on early or late hours.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>Different payment methods</h4>
        <div className='answer'>
          <p>
            We accept cash, bank transfer, credit card and even crypto payment.
          </p>
          <p>
            We can also find a work around in case you want to split your
            payment into multiple sessions.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>What products do you offer</h4>
        <div className='answer'>
          <p>We touch almost anything regarding photos and videos</p>
          <p>
            We never had a project which we couldn't take care of. Using the
            latest hardware and software allows us to fit any needs.
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
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
