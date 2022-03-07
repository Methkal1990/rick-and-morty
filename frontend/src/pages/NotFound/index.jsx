import React from "react";

import NotFoundIMG from "../../assets/not-found.png";
import { NotFoundContainer, NotFoundImage } from "./styles";

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundImage>
        <img src={NotFoundIMG} alt="Not Found" />
      </NotFoundImage>
      <h1>404</h1>
    </NotFoundContainer>
  );
}

export default NotFound;
