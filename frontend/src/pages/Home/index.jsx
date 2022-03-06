import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CharacterCard from "../../components/CharacterCard";
import * as actions from "../../actions/characters";
import { Container } from "./styles";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const characters = useSelector((state) => state.characters.allCharacters);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth", { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    dispatch(actions.getCharacters());
  }, [dispatch]);

  return (
    <Container>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Container>
  );
}

export default Home;
