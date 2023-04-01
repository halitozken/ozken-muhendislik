import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { mobile } from "../responsive";

import foto1 from "../images/pexels-alex-11951233-min.jpg";
import foto2 from "../images/pexels-daniel-smyth-10406128-min.jpg";
import foto3 from "../images/pexels-pixabay-50691-min.jpg";
import foto4 from "../images/foto4-min.jpeg";

const Container = styled.div`
  width: 100%;
  background-color: #f8f8f8;

  ${mobile({ height: "38vh" })}
`;
const ImageArea = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 75vh;
  margin: auto;
  object-fit: cover;
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

// import React, { useState } from "react";
// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

// import styled from "styled-components";
// import { sliderItems } from "../data";
// import { mobile } from "../responsive";

// const Container = styled.div`
//   width: 100%;
//   height: 75vh;
//   display: flex;
//   position: relative;
//   overflow: hidden;
//   z-index: 1;
//   /* scale-down */
//   ${mobile({ height: "40vh" })}
// `;

// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #fff7f7;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
// `;

// const Wrapper = styled.div`
//   height: 100%;
//   display: flex;
//   transition: all 1.5s ease;
//   transform: translateX(${(props) => props.slideIndex * -100}vw);
// `;

// const Slide = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   background-color: #${(props) => props.bg};
// `;

// const ImgContainer = styled.div`
//   width: 100%;
//   height: 140vh;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   ${mobile({ height: "50%", objectFit: "cover" })}
// `;

// // const InfoContainer = styled.div`
// //   flex: 1;
// //   padding: 50px;
// // `;

// // const Title = styled.h1`
// //   font-size: 70px;
// // `;

// // const Desc = styled.p`
// //   margin: 50px 0px;
// //   font-size: 20px;
// //   font-weight: 500;
// //   letter-spacing: 3px;
// // `;

// // const Button = styled.button`
// //   padding: 10px;
// //   font-size: 20px;
// //   background-color: transparent;
// //   cursor: pointer;
// // `;

// const Slider = () => {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const handleClick = (direction) => {
//     if (direction === "left") {
//       setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
//     } else {
//       setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
//     }
//   };

//   return (
//     <Container>
//       <Arrow direction="left" onClick={() => handleClick("left")}>
//         <ArrowLeftOutlined />
//       </Arrow>
//       <Wrapper slideIndex={slideIndex}>
//         {sliderItems.map((item) => (
//           <Slide bg={item.bg} key={item.id}>
//             <ImgContainer>
//               <Image src={item.img} />
//             </ImgContainer>
//             {/* <InfoContainer>
//               <Title>{item.title}</Title>
//               <Desc>{item.desc}</Desc>
//               <Button>SHOW NOW</Button>
//             </InfoContainer> */}
//           </Slide>
//         ))}
//       </Wrapper>
//       <Arrow direction="right" onClick={() => handleClick("right")}>
//         <ArrowRightOutlined />
//       </Arrow>
//     </Container>
//   );
// };

// export default Slider;
