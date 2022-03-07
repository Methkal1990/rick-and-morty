import React from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.png";
import { HeaderConatiner, HeaderLogo } from "./styles";

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderConatiner>
      <HeaderLogo>
        <img src={Logo} alt="Logo" onClick={() => navigate("/")} />
      </HeaderLogo>
    </HeaderConatiner>
  );
}

export default Header;
