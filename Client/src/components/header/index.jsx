import React from "react";
import { HeaderStyle } from "./styles";
import LogoPI from "../../assets/logo.png";
import LogoPP from "../../assets/logopref.png";

function Header() {
  return (
    <HeaderStyle>
      <div className="container">
        <img src={LogoPI} alt="teste" className="logoPI" />
        <img src={LogoPP} alt="teste" className="LogoPP" />
        
      </div>
    </HeaderStyle>
  );
}

export default Header;
