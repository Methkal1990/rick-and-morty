import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  margin-left: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  border: 0.5px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  position: relative;

  h2 {
    letter-spacing: 1px;
    color: #fff;
    height: 25px;
    width: 100%;
    overflow: hidden;
  }
`;

export const CardImageBox = styled.div`
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;

    &:hover {
      opacity: 0.5;
    }
  }
`;

export const FavImage = styled.img`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  border-radius: 50%;
`;
