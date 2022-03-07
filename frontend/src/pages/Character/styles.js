import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CharacterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 20px;
  border: 0.1px solid #ccc;
  border-radius: 10px;
  width: 400px;

  h1 {
    margin-bottom: 20px;
    color: #fff;
    letter-spacing: 2px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  width: 200px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const CharacterInfo = styled.div`
  border: 0.1px solid #fff;
  width: 100%;
  padding: 10px;
  color: #fff;
  letter-spacing: 2px;

  h2 {
    margin-bottom: 20px;
    color: #fff;
  }

  p {
    color: #4caf50;

    span {
      margin-left: 10px;
      color: #fff;
    }
  }

  @media (max-width: 500px) {
    width: 80%;
  }
`;

export const FavImage = styled.img`
  position: absolute;
  z-index: 10;
  top: 10px;
  right: 10px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
  -webkit-filter: drop-shadow(-1px -1px 1px #fff);
  filter: drop-shadow(-1px -1px 1px #fff);

  &:hover {
    opacity: 0.5;
  }
`;
