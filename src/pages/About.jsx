import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const Container = styled.div`
  width: 100%;
`;

const AboutArea = styled.div`
  width: 100%;
`;

const Header = styled.h2`
  padding-bottom: 10px;
  letter-spacing: 1px;
  transition: all 0.3s;

  &:hover {
    font-size: 35px;
  }
`;

const Text = styled.p`
  letter-spacing: 1px;
  line-height: 1.5;
  font-weight: 500;
  word-spacing: 3px;
`;

const Box = styled.div`
  width: 85%;
  font-size: 18px;
  margin: auto;
`;

const Info = styled.div`
  padding: 25px 0px;
`;

const VisionArea = styled.div`
  padding: 25px 0px;
`;

const MissionArea = styled.div`
  padding: 25px 0px;
`;

const About = () => {
  return (
    <Container>
      <Headline />
      <Navbar />
      <Menu />
      <AboutArea>
        <Box>
          <Info>
            <Header>Hakkımızda</Header>
            <Text>
              1995 yılında kurduğumuz <b>Özken Mühendislik</b>, talaşlı imalat
              ile başladığı girişimcilik serüvenini güçlendirmeyi başarmış,
              vizyonu ve misyonu ile bu serüveni en ileri boyuta taşımıştır.
              Sunduğumuz kullanıcı öncelikli stratejilerimiz ve ayrıcalıklı
              müşteri portföyü ile değerini paha biçilemez şekilde ikiye
              katlayarak, marka değerimizi hassasiyetle zirveye taşımayı
              başardık. Dünya standartlarını göz önünde bulundurarak çözüm ve
              güven içerikli ilkemiz ile yola çıktığımız bu serüvende; otorite
              rayından çıkmayarak, istikrarlı şekilde sayısız müşteriye en iyi
              marka sahipliğini yapmış durumdayız. Kuruluşundan günümüze
              süregelen profesyonellik, empati odaklı, dürüstlük ve gelişime
              açık bakış açımız ile istikrarlı büyüme sergileyerek, talaşlı
              imalat dünyasında saygın bir konuma yükselmeye hak kazandık.
              Markamız; talaşlı imalat alanında en kaliteli ürünleri, tüketiciye
              en uygun fiyat ile sunma amacıyla kurulmuş olup, geride
              bıraktığımız 30 yıl boyunca da, sektörde yaklaşımımızı aynı
              titizlik dâhilinde korumaya devam etmekteyiz. Markamız üzerinden
              gerçekleştirdiğiniz tüm alışverişlerinizde; mağduriyet içermeyen,
              hızlı teslimat, iptal/iade/değişim bilinci ile yaklaşımını
              sağlayan müşteri temsilcilerimiz ile en keyifli alışveriş
              deneyimini yaşamayı mümkün kılıyoruz. Sektördeki son gelişmeleri
              ve kullanıcı alanındaki güncel talepleri takip ederek, çağdaş
              düzeydeki teknolojiyle buluşturduğumuz web adresimizi sizlere
              sunuyor, en iyi ekip arkadaşlarımız, güçlü ve profesyonel idari
              yönetimimiz ile takibini gerçekleştirerek, tüketici haklarını en
              iyi şekilde yaşamanızı elde etmenizi sağlıyoruz. Hedefimiz;
              kullanıcı deneyimi ile e-ticaret camiasında “ziyaretçi memnuniyeti
              en yüksek” konumuna ulaşarak, halkın takdirini kazanmak ve
              sitemizden sorunsuz, mutlu tüketici konumunda ayrılmanızı
              sağlamak. Örnek nitelikle misyonunu genişleterek, projelerini
              hayata geçirmeye devam eden markamız, standartların üstünde
              kaliteyle öncülük ederek, birçok memnuniyet beraberinde başarılı
              işlere imzasını atarak başarısına başarı katacak, güçlü kadro
              dâhilinde sorun odaklı çalışma prensibi ile organizasyonel şekilde
              sizin memnuniyetinizi sağlamaya devam edecektir.
            </Text>
          </Info>
          <VisionArea>
            <Header>Vizyonumuz</Header>
            <Text>
              30 yılı aşan geçmişimizde oluşturduğumuz kurumsal değerlerimizi
              koruyup yeni yüzyılın rekabet ortamında da en iyi hizmeti ve en
              kaliteli ürünleri yeni teknolojilerle donatılmış tesisimizde,
              tecrübeli ve çalışkanlıklarıyla gurur duyduğumuz değerli
              çalışanlarımız ile birlikte ülkesine ve müşterilerine değer katan,
              sektöründe takip edilen firma olabilmektir.
            </Text>
          </VisionArea>
          <MissionArea>
            <Header>Misyonumuz</Header>
            <Text>
              İleri teknikleri ve son teknolojileri kullanarak, Ar-Ge
              çalışmalarımızı sürekli arttırarak; dünya pazarlarında kabul gören
              en yüksek standartlara sahip kaliteli ürünlerimizle uluslar arası
              bir marka olmak ve satış sonrası hizmetlerde hemen ulaşılabilirlik
              avantajımızla sürekli yenilikçi çözümler üretmektir.
            </Text>
          </MissionArea>
        </Box>
      </AboutArea>

      <Footer />
    </Container>
  );
};

export default About;
