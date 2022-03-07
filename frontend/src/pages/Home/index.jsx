import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CharacterCard from "../../components/CharacterCard";
import * as actions from "../../actions/characters";
import { Container } from "./styles";
import Loader from "../../components/Loader";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const characters = useSelector((state) => state.characters.allCharacters);
  const token =
    useSelector((state) => state.auth.token) || localStorage.getItem("token");
  const isLoading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    if (!token) {
      navigate("/auth", { replace: true });
    }
  }, [navigate, token]);

  useEffect(() => {
    dispatch(actions.getCharacters(token));
  }, [dispatch, token]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Container>
  );
}

export default Home;
