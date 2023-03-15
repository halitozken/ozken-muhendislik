import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import foto1 from "../images/foto1.jpeg";
import foto2 from "../images/foto2.jpeg";
import foto3 from "../images/foto3.jpeg";
import foto4 from "../images/foto4.jpeg";

const Container = styled.div`
  width: 100%;
  margin-top: 24px;
  padding-top: 4px;
  background-color: #f8f8f8;
`;
const ImageArea = styled.div``;

const Image = styled.img`
  width: 75%;
  height: 80vh;
  margin: auto;
  object-fit: fill;
  pointer-events: none;
`;
export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <Container>
        <Slider {...settings}>
          <ImageArea>
            <Image src={foto1} />
          </ImageArea>
          <ImageArea>
            <Image src={foto2} />
          </ImageArea>
          <ImageArea>
            <Image src={foto3} />
          </ImageArea>
          <ImageArea>
            <Image src={foto4} />
          </ImageArea>
        </Slider>
      </Container>
    );
  }
}
