import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className='services'>
      <div className='description'>
        <h2>
          High <span>quality</span> services
        </h2>
        <div className='cards'>
          <div className='card'>
            <div className='icon'>
              <img src={clock} alt='clock' />
              <h3>Efficient</h3>
            </div>
            <p>Our team values your time and brings up the best solutions.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={teamwork} alt='teamwork' />
              <h3>Teamwork</h3>
            </div>
            <p>
              The end product is the result of close collaboration between our
              team members.
            </p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={diaphragm} alt='diaphragm' />
              <h3>Diaphragm</h3>
            </div>
            <p>
              We use the latest technologies and cameras in order to serve you
              only high quality products.
            </p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={money} alt='money' />
              <h3>Affordable</h3>
            </div>
            <p>
              Our prices fit any type of budget and we are flexible when it
              comes to payment methods.
            </p>
          </div>
        </div>
      </div>
      <div className='image'>
        <img src={home2} alt='camera' />
      </div>
    </div>
  );
};

export default ServicesSection;
