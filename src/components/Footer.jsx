import React from "react";
import styled from "styled-components";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Container = styled.div`
  width: 100%;
  height: 34vh;
  background-color: #323232;
  color: white;
  font-weight: 300;
`;

const Area = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Left = styled.div`
  flex: 3;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  letter-spacing: 1px;
`;

const List = styled.ul`
  list-style-type: none;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const Copyright = styled.p`
  text-align: center;
  padding-bottom: 10px;
`;

const Text = styled.h1``;

const Footer = () => {
  return (
    <Container>
      <Area>
        <Left>
          <Text>Özken Mühendislik</Text>
          {/* <List>
            <ListItem>Anasayfa</ListItem>
            <ListItem>Hakkımızda</ListItem>
            <ListItem>Projeler</ListItem>
            <ListItem>Hizmetlerimiz</ListItem>
            <ListItem>Galeri</ListItem>
            <ListItem>İletişim</ListItem>
          </List> */}
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
