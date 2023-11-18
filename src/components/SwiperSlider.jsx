import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiperslider.styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image1 from "../images/slider/pexels-pixabay-50691.jpg";
import image2 from "../images/slider/pexels-daniel-smyth-10406128.jpg";
import image3 from "../images/slider/pexels-alex-11951233.jpg";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Image = styled.img`
  width: 100%;
  height: 75vh;
  margin: auto;
  object-fit: cover;
  pointer-events: none;

  ${mobile({ width: "100%", height: "40vh" })}
`;

const Title = styled.h1`
  font-size: 70px;
  color: #ffffff;
  ${mobile({ fontSize: "34px" })}
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 1px;
  color: white;
  ${mobile({ fontSize: "20px", margin: "10px 0px" })}
`;

const Button = styled.button`
  color: white;
  padding: 6px;
  font-size: 20px;
  font-weight: 600;
  border: 1px solid;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: #0086bc;
    border: 1px solid #0086bc;
  }

  ${mobile({ fontSize: "14px" })}
`;

const InfoArea = styled.div`
  width: 100%;
  position: absolute;
  top: 20px;
  left: 80px;
  z-index: 2;

  ${mobile({ left: "8px" })}
`;

const SwiperSlider = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "white",
          "--swiper-pagination-color": "white",
        }}
        spaceBetween={30}
        centeredSlides={true}
        rewind={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={image1} alt="Bursa CNC" loading="lazy" />
          <InfoArea>
            <Title>Özken Mühendislik</Title>
            <Desc>Teknoloji ile Geleceği Şekillendiriyoruz</Desc>
            <Link to="/iletisim">
              <Button>İletişim</Button>
            </Link>
          </InfoArea>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image2} alt="Bursa Torna" loading="lazy" />
          <InfoArea>
            <Title>Özken Mühendislik</Title>
            <Desc>Kalite ile Memnuniyeti Birleştiriyoruz</Desc>
            <Link to="/iletisim">
              <Button>İletişim</Button>
            </Link>
          </InfoArea>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image3} alt="Bursa Freze" loading="lazy" />
          <InfoArea>
            <Title>Özken Mühendislik</Title>
            <Desc>Güvenilir Çözümler, Düşük Maliyetler</Desc>
            <Link to="/iletisim">
              <Button>İletişim</Button>
            </Link>
          </InfoArea>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSlider;
