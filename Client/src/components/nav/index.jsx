import React from "react";
import { FaHome } from "react-icons/fa";
import { NavStyle } from "./styles";
import { Link,NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <NavStyle>
      <div className="container2">
        <ul>
          <li>
        <Link to="/">
            <FaHome className="icone" />
        </Link>
          </li>
          <NavLink to="/cadastro">
          <li>Área de cadastro</li>
          </NavLink>
          <li>Área de consulta</li>
          <li>Contate-nos</li>
        </ul>
         

      </div>
    </NavStyle>
  );
};
export default Nav;
