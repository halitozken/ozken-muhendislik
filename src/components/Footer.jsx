import React from "react";
import styled from "styled-components";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #111111;
  color: white;
  font-weight: 400;
  padding-top: 24px;
  padding-bottom: 12px;
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
  font-size: 14px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  color: #c7c7c7;
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  color: #c7c7c7;
  font-size: 14px;
`;

const Title = styled.h3`
  margin-bottom: 16px;
  border-bottom: 1px solid white;
`;

const Copyright = styled.div`
  border-top: 1px solid #c7c7c771;
  font-size: 12px;
  padding-top: 12px;
  text-align: center;
  color: #c7c7c7;
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
            Duaçınarı Mh. Uslu Çk. No: 1 Yıldırım / Bursa
          </ContactItem>
          <ContactItem>
            <BsFillTelephoneFill style={{ marginRight: "10px" }} />
            +90 224 363 83 15
          </ContactItem>
          <ContactItem>
            <GrMail style={{ marginRight: "10px" }} />
            info@ozkenmuhendislik.com
          </ContactItem>
        </Right>
      </Area>
      <Copyright>Copyright © 2023 Özken Mühendislik.</Copyright>
    </Container>
  );
};

export default Footer;
