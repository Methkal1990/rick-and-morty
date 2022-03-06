import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Heart from "../../assets/heart.png";
import HeartFilled from "../../assets/heart-filled.png";
import * as actions from "../../actions/characters";
import {
  Container,
  ImageContainer,
  CharacterContainer,
  CharacterInfo,
  FavImage,
} from "./styles";

function Character() {
  const { characterId } = useParams();
  const dispatch = useDispatch();
  const currentCharacter = useSelector(
    (state) => state.characters.currentCharacter
  );

  useEffect(() => {
    dispatch(actions.getCharacter(characterId));
  }, [characterId, dispatch]);

  return (
    <Container>
      <CharacterContainer>
        <FavImage src={currentCharacter?.isFavorite ? HeartFilled : Heart} />
        <ImageContainer>
          <img src={currentCharacter?.image} alt={currentCharacter?.name} />
        </ImageContainer>
        <h1>{currentCharacter?.name}</h1>
        <CharacterInfo>
          <h2>Character Details</h2>
          <p>
            Location:<span>{currentCharacter?.location?.name}</span>
          </p>
          <p>
            Status:<span>{currentCharacter?.status}</span>
          </p>
          <p>
            Gender:<span>{currentCharacter?.gender}</span>
          </p>
          <p>
            Species:<span>{currentCharacter?.species}</span>
          </p>
        </CharacterInfo>
      </CharacterContainer>
    </Container>
  );
}

export default Character;
