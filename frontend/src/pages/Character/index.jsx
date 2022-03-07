import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import usePrevious from "../../hooks/usePrevious";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentCharacter = useSelector(
    (state) => state.characters.currentCharacter
  );
  const isLoading = useSelector((state) => state.loading.isLoading);
  const isLoadingPrevious = usePrevious(isLoading);

  const handleFavorite = (e) => {
    dispatch(actions.favoriteCharacter(characterId));
  };

  useEffect(() => {
    dispatch(actions.getCharacter(characterId));
  }, [characterId, dispatch]);

  useEffect(() => {
    if (isLoadingPrevious && !isLoading && !currentCharacter.id) {
      navigate("/not-found", { replace: true });
    }
  }, [isLoading, isLoadingPrevious, navigate, currentCharacter.id]);

  return (
    <Container>
      <CharacterContainer>
        <FavImage
          src={currentCharacter?.isFavorite ? HeartFilled : Heart}
          onClick={handleFavorite}
        />
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
