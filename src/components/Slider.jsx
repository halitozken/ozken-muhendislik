import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { mobile } from "../responsive";

import foto1 from "../images/foto1.jpeg";
import foto2 from "../images/foto2.jpeg";
import foto3 from "../images/foto3.jpeg";
import foto4 from "../images/foto4.jpeg";

const Container = styled.div`
  width: 100%;
  background-color: #f8f8f8;

  ${mobile({ height: "40vh", paddingTop: "0px", marginTop: "24px" })}
`;
const ImageArea = styled.div``;

const Image = styled.img`
  width: 70%;
  height: 75vh;
  margin: auto;
  object-fit: fill;
  pointer-events: none;
  ${mobile({ width: "100%", height: "40vh" })}
`;

export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: false,
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
            <Image src={foto1}></Image>
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
