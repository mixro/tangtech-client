import './details.css'
import { companyServices, swiperProducts } from '../../staticData'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { Build, Extension, GppGood } from "@mui/icons-material"

const Details = () => {
  return (
    <div className="details">
        <div className="details-wrapper">
            <div className="details-services-container details_header">
                <h2>OUR SERVICES</h2>

                <div className="details-services">
                    {companyServices.map((service) => (
                        <div className="details-service" key={service.id}>
                            <div className="details-service-image">
                                <img src={service.image} alt="ELECTRICAL SERVICE IMG" />
                            </div>
                            <div className="details-service-text">
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <Link to='/services' className='link-main'>
                                    <button>View..</button>
                                </Link>

                                <div className="details-service-icon">
                                    {service.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="featured_Products">
                <h2>FEATURED PRODUCTS</h2>
                <div className="featuredProducts_Item">
                    <Swiper
                        spaceBetween={20}
                        breakpoints={{
                            320: {
                            slidesPerView: 1,
                            },
                            640: {
                            slidesPerView: 2,
                            },
                            1000: {
                            slidesPerView: 3,
                            },
                            1024: {
                            slidesPerView: 4,
                            },
                        }}
                        cssMode={true}
                        navigation={true}
                        pagination={false}
                        mousewheel={true}
                        keyboard={true}
                        loop={true}
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        {swiperProducts.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="slider-container">
                                    <Link to='/products' className='link-main'>
                                        <div className="slider-name">
                                            <p>{product.name}</p>
                                            <p>{product.brand}</p>
                                        </div>
                                        <div className="slider-image">
                                            <img src={product.image} alt='CB' />
                                        </div>
                                        <div className="slider-product-desc">
                                            <p>{product.desc}</p>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="our_business">
                <div className="ourBusiness-left">
                    <h2>ABOUT US</h2>
                    <div className="ourBusiness-description">
                        <p>At TANG TECH, we are dedicated to providing innovative electrical and ICT solutions, specializing in installation, maintenance, and the distribution of high-quality power and technology products.</p>  
                        <p>Driven by innovation and excellence, our vision is to be a leading force in electrical and ICT solutions, delivering sustainable and cutting-edge technology. <br /> <br />Our mission is to empower businesses and communities with superior services, advanced solutions, and a commitment to continuous growth and efficiency.</p>
                    </div>
                    <div className="ourBusiness_button">
                        <Link to='/about-us' className='link-main'>
                            <button>Read more</button>
                        </Link>
                    </div>
                </div>

                <div className="ourBusiness-right"></div>
            </div>

            <div className="choose-us">
                <h2>WHY CHOOSE US?</h2>

                <div className="choose-us-items">
                    <div className="choose-us-item">
                        <Build sx={{fontSize: {xs: 60, sm: 80}}} className='choose-us-icon' />
                        <h3>Expertise</h3>
                        <p>We brings extensive expertise in electrical engineering and ICT solutions.</p>
                    </div>
                    <div className="choose-us-item">
                        <Extension sx={{fontSize: {xs: 60, sm: 80}}} className='choose-us-icon' />
                        <h3>Innovation</h3>
                        <p>We stay updated with the latest technological advancements to provide..</p>
                    </div>
                    <div className="choose-us-item">
                        <GppGood sx={{fontSize: {xs: 60, sm: 80}}} className='choose-us-icon' />
                        <h3>Quality Assurance</h3>
                        <p>We adhere to industry standards and best practices, ensuring high quality service delivery.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details