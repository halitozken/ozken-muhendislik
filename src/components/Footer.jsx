import React from "react";
import styled from "styled-components";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Container = styled.div`
  width: 100%;

  background-color: #323232;
  color: white;
  font-weight: 300;
`;

const Area = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Left = styled.div`
  padding: 20px;
`;

const Right = styled.div`
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  letter-spacing: 1px;
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
`;

const Title = styled.h3`
  margin-bottom: 16px;
  border-bottom: 1px solid white;
`;

const Copyright = styled.div`
  text-align: center;
`;

const Text = styled.h3`
  margin-left: 40px;
  margin-bottom: 16px;
  border-bottom: 1px solid white;
`;

const Footer = () => {
  return (
    <Container>
      <Area>
        <Left>
          <Text>Hizmetlerimiz</Text>
          <List>
            <ListItem>Cnc İşleme</ListItem>
            <ListItem>Torna</ListItem>
            <ListItem>Freeze</ListItem>
            <ListItem>Dokuma Makineleri</ListItem>
            <ListItem>Bakım, Onarım ve Kurulum</ListItem>
          </List>
        </Left>
        <Right>
          <Title>İletişim</Title>
          <ContactItem>
            <ImLocation style={{ marginRight: "10px" }} />
            Duaçınarı Mh. Uslu Sk. No: 1 Yıldırım / Bursa
          </ContactItem>
          <ContactItem>
            <BsFillTelephoneFill style={{ marginRight: "10px" }} />
            +90 224 363 83 15
          </ContactItem>
          <ContactItem>
            <GrMail style={{ marginRight: "10px" }} />
            ozkenmuhendislik@gmail.com
          </ContactItem>
        </Right>
      </Area>
      <Copyright>
        Copyright © 2023 Özken Mühendislik.
        <br /> All Right Reserved by ozken software
      </Copyright>
    </Container>
  );
};

export default Footer;
