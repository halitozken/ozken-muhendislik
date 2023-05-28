import React, { useState } from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { motion } from "framer-motion";
import MobileMenu from "../components/MobileMenu";
import { BoxContext } from "../Context";
import PageInfo from "../components/PageInfo";
import { FaRegAddressCard, FaStoreAlt, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiDevicePhoneMobile } from "react-icons/hi2";

const Container = styled.div`
  width: auto;
  height: "auto";
  overflow: hidden;
`;

const ContactInfo = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
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

const Header = styled.h2`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${mobile({ fontSize: "20px" })}
`;

const Text = styled.p`
  font-weight: 400;
  padding: 5px;
  letter-spacing: 2px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  ${mobile({
    fontSize: "10px",
    width: "auto",
    height: "auto",
    paddingTop: "42px",
  })}
`;

const Input = styled.input`
  width: 50%;
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
const FormHeader = styled.h2`
  margin: 10px;

  ${mobile({ textAlign: "center" })}
`;

const TextArea = styled.textarea`
  width: 50%;
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

const Map = styled.div``;

const Iframe = styled.iframe`
  width: 100vw;
  height: 600px;
  border: solid white;

  ${mobile({ width: "100%", height: "350px" })}
`;

const Contact = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <BoxContext.Provider value={{ isOpen, setOpen }}>
      <Container>
        <Headline />
        <Navbar />

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.6 } }}
        >
          <MobileMenu />
          <PageInfo />
          <ContactInfo>
            <Left>
              <Address>
                <Header>
                  <FaRegAddressCard style={{ paddingRight: "12px" }} />
                  İletişim:
                </Header>
                <br />
                <br />
                <Text>
                  <FaStoreAlt style={{ paddingRight: "18px" }} />
                  Duaçınarı Mh.
                </Text>
                <br />
                <Text style={{ paddingLeft: "48px" }}>Uslu Çk. No:1 </Text>
                <br />
                <Text style={{ paddingLeft: "48px" }}>Yıldırım / Bursa</Text>
                <br />
                <br />
                <Text>
                  <FaPhoneAlt style={{ paddingRight: "18px" }} />
                  Telefon : +90 224 363 83 15
                </Text>
                <br />
                <br />
                <Text>
                  <HiDevicePhoneMobile
                    style={{ paddingRight: "18px", fontSize: "32px" }}
                  />
                  GSM 1 : +90 546 719 09 87
                </Text>
                <br />
                <br />
                <Text>
                  <HiDevicePhoneMobile
                    style={{ paddingRight: "18px", fontSize: "32px" }}
                  />
                  GSM 2 : +90 532 468 51 33
                </Text>
                <br />
                <br />
                <Text>
                  <MdOutlineEmail
                    style={{ paddingRight: "18px", fontSize: "30px" }}
                  />
                  info@ozkenmuhendislik.com
                </Text>
              </Address>
            </Left>
            <Right>
              <Form action="https://formsubmit.co/el/kusepo" method="POST">
                <FormHeader>Bizimle iletişime geçin...</FormHeader>
                <Input
                  required
                  type="text"
                  name="fname"
                  placeholder="Ad"
                ></Input>
                <br />

                <Input
                  required
                  type="text"
                  name="lname"
                  placeholder="Soyad"
                ></Input>
                <br />

                <Input
                  required
                  type="text"
                  name="mail"
                  placeholder="Mail"
                ></Input>
                <br />

                <TextArea
                  required
                  name="message"
                  placeholder="Mesajınız yazın..."
                  rows="5"
                ></TextArea>
                <br />

                <Button type="submit">Gönder</Button>
              </Form>
            </Right>
          </ContactInfo>
          <Map>
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d298.0355155896664!2d29.095803928957874!3d40.19339472045505!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3f3fbb26cf47%3A0xbddeff7725eb6b10!2zw5Z6a2VuIE3DvGhlbmRpc2xpaw!5e0!3m2!1str!2str!4v1680346886074!5m2!1str!2str"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></Iframe>
          </Map>
        </motion.div>
        <Footer />
      </Container>
    </BoxContext.Provider>
  );
};

export default Contact;
