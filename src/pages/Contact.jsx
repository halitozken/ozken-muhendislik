import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: "auto" ${mobile({ height: "auto" })};
`;

const ContactInfo = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;

  ${mobile({ height: "auto", flexDirection: "column" })}
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 24px;
  ${mobile({ fontSize: "18px", paddingTop: "25px" })}
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({ fontSize: "20px", width: "100%" })}
`;

const Address = styled.div``;

const Header = styled.h1`
  ${mobile({ fontSize: "20px" })}
`;

const Text = styled.p`
  font-weight: 400;
  padding: 5px;
  letter-spacing: 2px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  padding-top: 25px;
  ${mobile({
    fontSize: "10px",
    width: "auto",
    height: "auto",
    paddingTop: "42px",
  })}
`;

const Input = styled.input`
  width: 20%;
  padding: 12px 16px;
  margin: 10px;
  font-weight: 500;
  font-size: 18px;
  box-sizing: border-box;
  transition-duration: 0.1s;
  letter-spacing: 1px;

  &:hover {
    font-weight: bold;
  }

  ${mobile({ fontSize: "18px", width: "300px" })}
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px 24px;
  font-size: 18px;
  margin: 10px;
  font-weight: bold;
  border: none;
  transition-duration: 0.5s;

  &:hover {
    background-color: #1d641f;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
const FormHeader = styled.h1`
  color:#F0542D
  margin: 10px;

  ${mobile({ textAlign: "center" })}
`;

const TextArea = styled.textarea`
  width: 20%;
  padding: 12px 16px;
  margin: 10px;
  font-weight: 500;
  font-size: 16px;
  resize: none;
  box-sizing: border-box;
  transition-duration: 0.1s;

  &:hover {
    font-weight: bold;
  }

  ${mobile({ fontSize: "18px", width: "300px" })}
`;

const Map = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({ paddingTop: "25px", paddingBottom: "25px" })}
`;

const Iframe = styled.iframe`
  width: 600;
  height: 450;

  ${mobile({ width: "350px", height: "350px" })}
`;

const Contact = () => {
  return (
    <Container>
      <Headline />
      <Navbar />
      <Menu />
      <ContactInfo>
        <Left>
          <Address>
            <Header>İletişim:</Header>
            <Text>Duaçınarı Mh.</Text>
            <Text>Uslu Çk. No:1 </Text>
            <Text>Yıldırım / Bursa</Text>
            <Text>Telefon: +90 224 363 83 15</Text>
            <Text>info@ozkenmuhendislik.com</Text>
          </Address>
        </Left>
        <Right>
          <Map>
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d190.4813629688114!2d29.095887821882023!3d40.193449150662026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1679248099107!5m2!1str!2str"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></Iframe>
          </Map>
        </Right>
      </ContactInfo>
      <Form>
        <FormHeader>Bizimle iletişime geçin...</FormHeader>
        <Input type="text" name="fname" placeholder="Ad"></Input>
        <br />

        <Input type="text" name="lname" placeholder="Soyad"></Input>
        <br />

        <Input type="text" name="mail" placeholder="Mail"></Input>
        <br />

        <TextArea
          name="message"
          placeholder="Mesajınız yazın..."
          rows="5"
        ></TextArea>
        <br />

        <Button type="submit">Gönder</Button>
      </Form>
      <Footer />
    </Container>
  );
};

export default Contact;
