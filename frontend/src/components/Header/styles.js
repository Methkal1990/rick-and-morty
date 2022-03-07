import styled from "styled-components";

export const HeaderConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0 0 10px #fff;
  margin-bottom: 30px;
`;

export const HeaderLogo = styled.div`
  height: 80px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;
