import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css/pagination";
import Sidebar from "../../img/CarsListSinglePage.png";
import Ecommerce from "../../img/TaxiWebPersonal.png";
import HOC from "../../img/MSBActivities.png";
import MusicApp from "../../img/carsListWithMultiDropDown.png";
import { themeContext } from "../../Context";

SwiperCore.use([Autoplay]);
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{delay: 3000, disableOnInteraction: false}}
        centeredSlides={true}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
