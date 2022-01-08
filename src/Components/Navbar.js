import React from "react";

import "./Style/navbar.css";

const Navbar = () => {
  return (
    <ul>
      <a className="tanıtım" href="/">
        Projenin Tanıtımı
      </a>
      <a className="proje" href="https://insaatmaliyethesabi.netlify.app/hesap">
        Maliyet Hesaplama
      </a>
    </ul>
  );
};
export default Navbar;
