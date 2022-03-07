import React from "react";
import { useNavigate } from "react-router-dom";

import Heart from "../../assets/heart.png";
import HeartFilled from "../../assets/heart-filled.png";
import { Card, CardImageBox, FavImage } from "./styles";

function CharacterCard({ character }) {
  const navigate = useNavigate();
  const isFavorite = character?.isFavorite;

  return (
    <Card onClick={() => navigate(`/${character.id}`)}>
      <FavImage src={isFavorite ? HeartFilled : Heart} />
      <CardImageBox>
        <img src={character?.image} alt={character?.name} />
      </CardImageBox>
      <h2>{character?.name}</h2>
    </Card>
  );
}

export default CharacterCard;
