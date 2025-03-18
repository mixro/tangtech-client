import './home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import Details from '../../Components/details/Details';


const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <h1></h1>
        <div className="home_gallery">
          <Swiper
              spaceBetween={0}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper1"
          >
              <SwiperSlide>
                <div className="homeSwiper-container">
                  <img src="/assets/back-1.jpg" className='swiper-background' alt="PCB" />

                  <div className="swiper-desc">
                    <h2>Technical Services</h2>
                    <p className="swiper-text-large">We offer expert electrical installations, high-voltage works, testing, commissioning and maintenance & repair services, ensuring reliable and efficient power solutions for residential, commercial, and industrial needs</p>
                    <p className="swiper-text-small">We provide expert electrical installations, high-voltage works, testing, commissioning, and maintenance to ensure reliable power solutions for all sectors</p>                    
                    <div className="swiper-button">
                      <Link to='/services' className='link-main'>
                        <button>Explore Services..</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="homeSwiper-container">
                  <img src="/assets/back-3.jpg" className='swiper-background' alt="PCB" />

                  <div className="swiper-desc desc-2">
                    <h2>Electrical Products</h2>
                    <p className="swiper-text-large">We provide a range of Electrical products, including transformers, switchgear, circuit breakers, transmission cables, and surge arresters, designed for efficient power distribution and system protection</p>
                    <p className="swiper-text-small">We offer Electrical products, including transformers, switchgear, circuit breakers, cables, and surge arresters for efficient power distribution and system protection.</p>                  
                    <div className="swiper-button">
                      <Link to='/products' className='link-main'>
                        <button>Explore Products..</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="homeSwiper-container">
                  <img src="/assets/back-2.jpg" className='swiper-background' alt="PCB" />

                  <div className="swiper-desc desc-3">
                    <h2>Technical Training</h2>
                    <p className="swiper-text-large">We provide engineering technical training, equipping professionals with practical skills in electrical installations, high-voltage systems, testing, commissioning, and maintenance.</p>
                    <p className="swiper-text-small">We provide engineering technical training, equipping professionals with practical skills in electrical installations, high-voltage systems, testing, commissioning, and maintenance.</p> 
                    <div className="swiper-button">
                      <Link to='/trainings' className='link-main'>
                        <button>Explore Trainings..</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
          </Swiper>
        </div>

        <div className="company-services">
          <div className="companyService_Item">
            <h2>OUR SERVICES</h2>
            <div className="companyService_desc">
              <div className="companyService-text">
                <ul>
                  <li>Electrical Services</li>
                  <li>ICT solutions</li>
                  <li>Security Solutions</li>
                  <li>Automation & Control System</li>
                </ul>
              </div>
              <div className="companyService_image">
                <img src="/assets/icon-1.png" alt="IMG" />
              </div>
            </div>
            <div className="service_exploreButton">
              <Link to="/services" className="link-main">
                <button>Explore</button>
              </Link>
            </div>
          </div>
          <div className="companyService_Item">
            <h2>ELECTRICAL PRODUCTS</h2>
            <div className="companyService_desc">
              <div className="companyService-text">
                <ul>
                  <li>Power Equipments</li>
                  <li>Protection & Safety</li>
                  <li>Testing & Monitoring</li>
                  <li>Control & Automation</li>
                </ul>
              </div>
              <div className="companyService_image">
                <img src="/assets/icon-2.png" alt="IMG" />
              </div>
            </div>
            <div className="service_exploreButton">
              <Link to="/products" className="link-main">
                <button>Explore</button>
              </Link>
            </div>
          </div>
          <div className="companyService_Item">
            <h2>TECHNICAL TRAINING</h2>
            <div className="companyService_desc">
              <div className="companyService-text">
                <ul>
                  <li>AutoCAD Training</li>
                  <li>Automation Training</li>
                  <li>Security Systems Training</li>
                  <li>Switchgear Assembly Training</li>
                </ul>
              </div>
              <div className="companyService_image">
                <img src="/assets/icon-3.png" alt="IMG" />
              </div>
            </div>
            <div className="service_exploreButton">
              <Link to="/trainings" className="link-main">
                <button>Explore</button>
              </Link>
            </div>
          </div>
        </div>

        <Details />
      </div>
    </div>
  )
}

export default Home