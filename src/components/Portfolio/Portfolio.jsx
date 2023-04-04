import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css/pagination";
import CarsListSingle from "../../img/CarsListSinglePage.png";
import TaxiWebPersonal from "../../img/TaxiWebPersonal.png";
import MSBActivitiesParent from "../../img/MSBActivities.png";
import MultiDropDownPersonal from "../../img/carsListWithMultiDropDown.png";
import MSBActivitiesAdmin from "../../img/Msb-Admin.png";
import MSBActivitiesKiosk from "../../img/Msb-Kiosk.png";
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
          <img src={MSBActivitiesKiosk} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CarsListSingle} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MSBActivitiesParent} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TaxiWebPersonal} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MultiDropDownPersonal} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MSBActivitiesAdmin} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
