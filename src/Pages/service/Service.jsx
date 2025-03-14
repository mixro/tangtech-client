import { Link, useLocation } from 'react-router-dom';
import './service.css'
import { useSelector } from 'react-redux';

const Service = () => {
  const location = useLocation();
  const serviceId = location.pathname.split("/")[2];
  const service = useSelector((state) => state.clientServices.services.find((service) => service._id === serviceId));

  return (
    <div className="service-container">
      <div className="service-wrapper">
        <h1>SERVICE</h1>
        <div className="service-top">
          <div className="service-left">
            <div className="service-left-top">
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
            <div className="service-left-buttons">
              <Link to="/contact-us" className='link-main service-left-button'>
                <button>Contact us</button>
              </Link>
              <Link to="/contact-us" className='link-main service-left-button button-2'>
                <button>Locate a service office</button>
              </Link>              
            </div>
            <div className="service-left-bottom">
              <p>Learn about {service.title}</p>
              <Link to='/services' className='link-main'>
                <p>Explore more services</p>
              </Link>
            </div>
          </div>

          <div className="service-right">
            <h2>{service.title}</h2>
            <div className="service-right-image">
              <img src={service.img} alt="SERVICE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service