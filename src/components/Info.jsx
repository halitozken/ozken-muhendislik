import React, { useContext } from "react";
import styled from "styled-components";
import { BoxContext } from "../Context";
import { mobile } from "../responsive";
import printer from "../images/3d.png";
import disli from "../images/disli.png";
import kalip from "../images/kalip.png";
import aparat from "../images/aparat.png";
import makine from "../images/makine.png";
import fikstür from "../images/fixture.png";

const InfoArea = styled.div`
width: 150%;
height: auto;
background-color: e8e8e88d;
display:flex;
justify-content: center
align-items: center;
margin-left: 32px;
${mobile({ margin: "0px" })} */

`;

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 40px;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 45px;
  transition: all 1s
  
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

`;

const Image = styled.img`
  width: 35%;
  height: auto;

  ${mobile({ display: "none" })}
`;
const Header = styled.h2`
  padding-left: 94px;
  padding-bottom: 24px;
  text-decoration-line: underline;

  ${mobile({ margin: "0px", padding: "0px", paddingBottom: "18px" })}
`;

const TextArea = styled.div`
  width: 85%;
  height: auto;
  transition: all 1s;

  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
`;
const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1px;
  inline-size: 85%;
  transition: all 1s;
  /* text-align: justify; */
  ${mobile({ fontSize: "18px" })}
`;

const Info = () => {
  const context = useContext(BoxContext);

  const box = context.selectedBox;

  return (
    <InfoArea>
      <Container
        id="makine"
        style={{ display: box === "makine" ? true : "none" }}
      >
        <Image src={makine} />
        <TextArea>
          <Header>Makine Tasarımı ve İmalatı</Header>
          <Text>
            Makine tasarımı, yada diğer adıyla makina tasarımı, müşterinin
            gereksinimlerini karşılamak için ekonomik olarak bir makine veya
            yapı oluşturmak için hayal gücünün, bilimsel prensiplerin ve
            mühendislik tekniklerinin kullanılması olarak tanımlanır.
            Makinelerin tasarımı, bir makinenin yaratılmasında ilk adımdır. Bir
            makinenin nasıl görüneceği ve çalışacağı konusunda temel fikri
            verir.
          </Text>
        </TextArea>
      </Container>
      <Container
        id="kalip"
        style={{
          display: box === "kalip" ? true : "none",
        }}
      >
        <Image src={kalip} />
        <TextArea>
          <Header>Kalıp Tasarımı ve İmalatı</Header>

          <Text>
            Kalıp tasarımı, kalıpların boyutlandırılması ve konumu, kesme
            kenarlarının boyutlandırılması, hassasiyetinin belirlenmesi, soğutma
            tekniklerinin belirlenmesi gibi üretim süreci öncesi yapılan ve
            nihai üretim proseslerinin belirlenmesine imkan veren çalışmalar
            bütünüdür. Firmamızdan talep edilen kalıplara ilişkin olarak tüm bu
            detaylar, kalıp tasarımı aşamasında belirlenir ve sonraki aşama olan
            kalıp detay tasarımının yapılması aşamasına geçilir.
          </Text>
        </TextArea>
      </Container>
      <Container style={{ display: box === "fikstür" ? true : "none" }}>
        <Image src={fikstür} />
        <TextArea>
          <Header>Fikstür Tasarımı ve İmalatı</Header>
          <Text>
            İmalat sürecinde ya da diğer endüstriyel süreçlerde iş paketlerini
            doğru lokasyona yerleştirmek ve sabitlenmiş konumda tutmak için
            kullanılır. Ayrıca; üretim maliyetini azaltırken kalitenin
            devamlılığını ve doğru özelliklere sahip çok çeşitli parçaların
            üretilebilmesini sağlar.
          </Text>
        </TextArea>
      </Container>
      <Container style={{ display: box === "aparat" ? true : "none" }}>
        <Image src={aparat} />
        <TextArea>
          <Header>Aparat Tasarımı ve İmalatı</Header>
          <Text>
            Aparat ve fikstürler, ürünlerinizi yüksek kaliteli, güvenli ve
            yinelenebilen bir şekilde üretmenizi ve teslim etmenizi sağlayan
            imalat yardımcılarıdır. Genellikle birlikte kullanılmalarına rağmen,
            aparat ve fikstür terimleri arasında belirgin farklar vardır.
            Aparatlar, operasyon süresi boyunca iş paketinin hareketini ve
            konumunu kontrol etmek için kullanılır. Aynı zamanda, ürünlerin
            imalatındaki verimliliği arttırırken üründe doğruluk,
            yinelenebilirlik ve değiştirilebilirlik sağlar.
          </Text>
        </TextArea>
      </Container>
      <Container style={{ display: box === "yedek" ? true : "none" }}>
        <Image src={disli} />
        <TextArea>
          <Header>Yedek Parça İmalatı</Header>
          <Text>
            Yedek parça veya servis parçası, bir envanterde tutulan ve arızalı
            birimlerin onarımı veya yenilenmesi için kullanılan değiştirilebilir
            bir önceden hazırlanmış parçadır. Yedek parçalar, lojistik
            mühendisliği ve tedarik zinciri yönetiminin önemli bir özelliğidir
            ve genellikle özel yedek parça yönetim sistemlerinden oluşur. Yedek
            parçalar, değiştirilebilir parçaların ve seri üretimin endüstriyel
            gelişiminin bir sonucudur.
          </Text>
        </TextArea>
      </Container>
      <Container style={{ display: box === "threed" ? true : "none" }}>
        <Image src={printer} />
        <TextArea>
          <Header>3D Tasarım ve Baskı</Header>
          <Text>
            3B (3D) tasarım herhangi bir objeyi veya nesneyi bilgisayar
            ortamında belirli araçları kullanarak oluşturmaktır. 3B tasarım
            birçok meslek grubunda kullanılmaktır. 3B tasarım, bir ihtiyaca,
            kullanım alanına, mühendislik hesaplarına göre önce kağıt üzerinde
            belirlenen parçanın bilgisayar ortamına aktarılmasıdır.
          </Text>
        </TextArea>
      </Container>
    </InfoArea>
  );
};

export default Info;
