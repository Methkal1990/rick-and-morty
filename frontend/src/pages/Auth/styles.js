import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  height: 100vh;
`;

export const AuthContainerBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 0 10px #fff;
  border-radius: 10px;
  width: 500px;
  overflow: hidden;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const AuthImageBox = styled.div`
  margin-top: 20px;
  width: 50%;
  margin-bottom: 20px;
`;

export const AuthImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const AuthTabs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  text-align: center;

  button {
    padding: 20px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    background-color: #fff;
    flex: 1;

    &.active {
      background-color: #333;
      color: #fff;
    }

    &:hover {
      background-color: #ccc;
      color: #fff;
    }
  }
`;
