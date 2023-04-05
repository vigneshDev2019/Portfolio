import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import "swiper/css/pagination";
import profilePic1 from "../../img/Male.png";
import profilePic2 from "../../img/Female.png";
import profilePic3 from "../../img/MaleTwo.png";
import profilePic4 from "../../img/Female.png";


SwiperCore.use([Autoplay]);
const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      name: "Karthick",
      role: "(Lead - Developer)",
      review:
        "You have elevated this project with your hard work and great ideas. Thank you for your contributions.",
    },
    {
      img: profilePic2,
      name: "Kanchana",
      role: "(Lead - QA)",
      review:
        "I wanted to express my gratitude for your contributions to this team. You have a talent for attention to detail, and it shows in your work.",
    },
    {
      img: profilePic3,
      name: "Murugan",
      role: "(Senior - UI Developer)",
      review:
        "Your focus on innovation is fabulous and it has lightened a spark in the minds of everyone on this team. Great work. Your problem-solving skills are second to none.",
    },
    {
      img: profilePic4,
      name: "Lavanya",
      role: "(Senior - React Native Developer)",
      review:
        "You have always been a rock to our team. Someone to rely on even when we are working under immense pressure and tough deadlines. You have been a true mentor and teacher for the team, we appreciate your guidance.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Colleagues & Client always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        modules={[Pagination]}
        autoplay={{delay: 3000, disableOnInteraction: false}}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div  className="testimonial">
                <img src={client.img} alt="" />
                <span style={{color: "white"}}>{client.name}</span>
                <span style={{color: "white", fontSize:"0.6rem"}}>{client.role}</span>
                <span ><q style={{color: "", fontSize:"0.7rem"}}>{client.review}</q></span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
