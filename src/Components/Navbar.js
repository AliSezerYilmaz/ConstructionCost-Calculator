import React from "react";
import { Link } from "react-router-dom";

import "./Style/navbar.css";

const Navbar = () => {
  return (
    <ul>
      <Link className="tanıtım" to="/">
        Projenin Tanıtımı
      </Link>
      <Link className="proje" to="/hesap">
        Maliyet Hesaplama
      </Link>
    </ul>
  );
};
export default Navbar;
