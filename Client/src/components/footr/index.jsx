import React from "react";
import { FooterStyle } from "./styles";
import LogoPI from "../../assets/logo.png";
const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="copyright">
          <p>© Todos os direitos reservados </p>
          <a href="https://praticainfo.com/" rel="noreferrer" target="_blank">
            <img src={LogoPI} alt="Logo Vacinometro" className="logo" />
          </a>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
