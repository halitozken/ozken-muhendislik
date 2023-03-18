import React, { useContext } from "react";
import styled from "styled-components";
import { BoxContext } from "../Context";
import { Visibility } from "material-ui-icons";
import { mobile } from "../responsive";
import freze from "../images/freze.png";

const InfoArea = styled.div`
width: 150%;
height: auto;
background-color: e8e8e88d;
display:flex;
justify-content: center
align-items: center;
margin-left: 32px;
${mobile({ display: "none" })}

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
  width: 22%;
  height: auto;

  ${mobile({ display: "none" })}
`;
const Header = styled.h2`
  padding-left: 94px;
  padding-bottom: 24px;
  text-decoration-line: underline;
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
`;

const Info = () => {
  const context = useContext(BoxContext);

  const box = context.selectedBox;

  return (
    <InfoArea>
      <Container id="cncBox" style={{ display: box === "cnc" ? true : "none" }}>
        <Image src="https://cdn.tridi.co/images/p-become-partner/alt_hizmet_isleme.png?format=webp&width=1400&rmode=min" />
        <TextArea>
          <Header>CNC İşleme Nedir?</Header>
          <Text>
            CNC işleme teknolojisi, bilgisayar kontrollü eksenler aracılığıyla
            hareket ettirilen ve kesici takımlar ile iş parçasından talaş
            kaldırılarak şekillendirme yapan bir talaşlı imalat yöntemidir.
            {/* <br></br>
            <br></br>
            CNC işleme ile üretim basitçe birkaç aşamadan oluşur: İlk adım, elde
            edilmek istenen modelin, iş parçasından nasıl bir işlem sırası ve
            hangi yöntemler ile elde edileceğini belirleyen programlama ve CAM
            dosyası oluşturma adımıdır. Bu aşamada kısaca kesici takımın dönme
            hızı, motor gücü ve kesici takımların izleyeceği yol gibi detaylar
            belirlenir. */}
            {/* <br></br>
            <br></br>
            Bu aşamadan sonra, iş parçasının makineye bağlanmasını
            kolaylaştıracak tutucu aparatlar parçaya göre hazırlanır veya
            tasarlanır. İş parçası makineye sabit bir şekilde yerleştirildikten
            sonra önceden programlanmış döngü başlatılarak talaş kaldırma
            işlemine geçilir ve bu süreç sonunda tasarlanan ürün elde edilir.
            <br></br>
            <br></br>
            CNC işleme teknolojisi, geniş malzeme çeşitliliğiyle yüksek
            hassasiyet ve tekrarlanabilirliğe sahip mekanik parçalar
            üretebilmenize olanak tanır. Orta aşama prototiplemeden son ürün
            kullanımına kadar birçok üretim ihtiyacını adet sınırı olmadan
            karşılayabileceğiniz talaşlı imalat yöntemidir. */}
          </Text>
        </TextArea>
      </Container>
      <Container
        id="tornaBox"
        style={{
          display: box === "torna" ? true : "none",
        }}
      >
        <Image src="https://cdn.tridi.co/images/p-become-partner/alt_hizmet_torna.png?format=webp&width=1400&rmode=min" />
        <TextArea>
          <Header>Torna Nedir?</Header>

          <Text>
            Kendi ekseni etrafında dönen metal bir iş parçası üzerinden doğrusal
            hareket eden kesici takım aracılığı ile talaş kaldırma işlemine
            tornalama denir. Tornalama işleminin yapıldığı tezgâha torna tezgâhı
            ya da bilinen ve kısa ismiyle torna adı verilir.
            {/* <br></br>
            <br></br>
            Torna tezgâhları pek çok işlemede kullanılır; ağaç tornalama, metal
            işleme, metal sıvama, termal püskürtme ya da cam işleme gibi
            amaçlarda kullanılır. Torna tezgahları ağaç tornalama, metal işleme,
            metal sıvama, termal püskürtme, parça ıslahı ve cam işlemede
            kullanılır. Torna tezgahının en iyi bilinen tasarımı çanak çömlek
            yapımında çömlek çamurunu şekillendirmek için kullanılan çömlekçi
            çarkı’dır.
            <br></br>
            <br></br>
            En uygun şekilde donatılmış tornalar aynı zamanda katı malzemeleri
            döndürerek düz silindirik yüzeylerin yapımında ve vida dişleri
            açmada veya helis yüzeyler yapımında da kullanılır. Çıtalarla
            inanılmaz karmaşıklıkta üç boyutlu katılar yapılabilir. İş parçası
            genellikle bir veya iki punta tarafından tutulur ve bunlardan en az
            biri farklı iş parçası uzunluklarına uyum sağlamak için genelde
            yatay hareket ettirilir. İş parçası torna aynası veya pens
            kullanılarak veya kelepçelerle veya dog clutch’ı kullanılıp
            sabitlenerek de dönme ekseni etrafında döndürülebilir. */}
          </Text>
        </TextArea>
      </Container>
      <Container style={{ display: box === "freze" ? true : "none" }}>
        <Image src={freze} />
        <TextArea>
          <Header>Freze nedir, ne işe yarar?</Header>
          <Text>
            Freze endüstriyel talaşlı imalatta kullanılan bir çeşit takım
            tezgahına verilen isimdir. 19 yüzyılın sonralarına doğru hayatımızda
            yerini aldı. Günümüzde özellikle metal ya da metal alaşımlarından
            parça üreten her işletmede freze tezgâhı görmek mümkün. Freze
            makinelerinin 19. yüzyılda hayatımıza girmiş olsa da teknolojik
            gelişmeler ile günümüzde artık çok daha gelişmiş bir halde karşımıza
            çıkıyor.
          </Text>
        </TextArea>
      </Container>
    </InfoArea>
  );
};

export default Info;
