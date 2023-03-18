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
  height: 100vh;
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
  ${mobile({
    fontSize: "10px",
    width: "auto",
    height: "auto",
    paddingTop: "42px",
  })}
`;

const Input = styled.input`
  width: 150%;
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

  ${mobile({ fontSize: "18px", width: "100%" })}
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
  width: 150%;
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

  ${mobile({ fontSize: "18px", width: "100%" })}
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
        </Right>
      </ContactInfo>
      <Footer />
    </Container>
  );
};

export default Contact;
