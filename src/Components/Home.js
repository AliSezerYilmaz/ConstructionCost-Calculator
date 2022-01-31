import React, { Component } from "react";
import Navbar from "./Navbar";
import "./Style/home.css";

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="icerik">
          <h6 className="display-6 text-center">Proje'nin Kısa Tanıtımı</h6>
          <p>
            İnşaat mühendisliğinde PÜ = YA x BM x YSK x PÜO x İMHO x PYK x HB x
            BK formüllü kullanılılarak maliyet hesabı yapılmaktadır bu formülde:
            <br></br>
            <b>PÜ (Proje Ücreti):</b> Yukarıdaki birinci formüle göre hesaplanan
            proje ücretidir. <br></br>
            <b>YA (Yapı Alanı):</b> Bina oturma alanı ve kat alanları ile
            mühendislik hesabı gerektiren kapalı ve açık alanların toplamıdır.
            <br></br>
            <b>BM (Birim Maliyet):</b> Çevre ve Şehircilik Bakanlığı’nın yapı
            yaklaşık maliyeti hesabında kullanılan birim maliyetleridir.{" "}
            <br></br>
            <b>YSK (Yapı Sınıfı Katsayısı):</b> Yapının inşaat mühendisliği
            hizmeti zorluğunu belirleyen katsayıdır. <br></br>
            <b>PÜO (Proje Ücret Oranı):</b> Statik proje hizmetinin yapı
            yaklaşık maliyetinden alacağı payı belirleyen katsayıdır. <br></br>
            <b> İMHO (İnşaat Mühendisliği Hizmet Oranı):</b> 0.75 alınacaktır.{" "}
            <br></br>
            <b>PYK (Proje Yineleme Katsayısı):</b> Bir projenin aynı parselde
            birkaç kez uygulanması durumunda proje ücreti hesabında kullanılması
            gereken katsayıdır. <br></br>
            <b>HB (Hizmet Bölümleri):</b> Proje hizmetleri aşamalarından
            hangilerinin gerçekleştirilmiş olduğuna bağlı olarak hesaplanan
            katsayıdır. <br></br>
            <b>BK (Bölge Katsayısı):</b> Şube ve Temsilciliklerin ücret
            hesabında kullanılmak üzere, şehir merkezi ve ilçeler için
            belirledikleri katsayılardır. <br></br>
            Oluşturduğumuz sitede bu formül kullanılarak kullanıcıdan girilen
            veriler doğrultusunda maliyet hesabı yapılmaktadır. <br></br><br></br><br></br>
            <h6 className="display-6 text-center">Proje'nin Detayları</h6>
            <p className="par2">
              ReactJS kullanarak oluşturduğumuz projemizde ilk olarak sitemizin
              sayfaları için componentler oluşturduk. Oluşturduğumuz componentte
              hesap yapabilmek için ReactStrap'in Form kütüphanesini ekledik ve
              kullanıcıdan veri almak için bir form yapısı oluşturduk.
              Programımızda ReactJS in state ve props özellikleri ile girilen
              veriler kullanıcıdan alınıyor, kullanıcıdan alınan veriler maliyet
              hesabımızdaki formüle göre JavaScript kütüphaneleri kullanılarak
              hesaplanıyor. Hesaplanan maliyet JavaScript'in birim dönüşüm
              kütüphaneleri kullanılarak para formatına dönüştürülerek
              AlertifyJs'ten aldığımız alertbox yardımıyla kullanıcıya
              gösterliyor.
            </p>
          </p>
        </div>
        <footer className="footer"> <p>
          Ali Sezer YILMAZ
        </p></footer>
      </div>
    );
  }
}

export default Home;
