import React from "react";
import "./CharactersManager.css";
import CharacterDetail from "../CharacterDetail/CharacterDetail";
import Loading from "../Loading/Loading";
import Character from "../Character/Character";

const CHARACTER_LIST_API_URL = "https://api.disneyapi.dev/characters?page=";
const CHARACTER_DETAIL_API_URL = "https://api.disneyapi.dev/characters/";

const CharactersManager = () => {
  const [loading, setLoading] = React.useState(false);
  const [characterDetailId, setCharacterDetailId] = React.useState(null);
  const [characterDetailInfo, setCharacterDetailInfo] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [maxPages, setMaxPages] = React.useState(150);
  const [disneyCharacters, setDisneyCharacterse] = React.useState([]);

  // Load character list on first paint
  React.useEffect(() => {
    setLoading(true);
    const fullApiUrl = `${CHARACTER_LIST_API_URL}${currentPage}`;
    fetch(fullApiUrl)
      .then(response => response.json())
      .then(data => {
        setDisneyCharacterse(data.data);
        setMaxPages(data.totalPages);
        setLoading(false);
      });
  }, [currentPage]);

  // Load character detail when characterDetailId changes
  React.useEffect(() => {
    if (characterDetailId) {
      setLoading(true);
      const fullApiUrl = `${CHARACTER_DETAIL_API_URL}${characterDetailId}`;
      fetch(fullApiUrl)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setCharacterDetailInfo(data);
          setLoading(false);
        });
    }
  }, [characterDetailId]);

  return (
    <div className="characters-manager">
      <h2 className="characters-manager__title">DisneyPedia</h2>

      <div className="characters-manager__grid">
        {disneyCharacters.map(character => <Character
          key={character._id}
          className="characters-manager__item"
          character={character}
          onClick={(newCharacterDetailId) => setCharacterDetailId(newCharacterDetailId)}
        ></Character>)}
      </div>

      <div className="characters-manager__pager">
        <button disabled={currentPage === 1} className="characters-manager__pager-button" onClick={() => setCurrentPage(currentPage - 1)}>Anterior</button>
        <span className="characters-manager__current">{currentPage}</span>
        <button disabled={currentPage === maxPages} className="characters-manager__pager-button" onClick={() => setCurrentPage(currentPage + 1)}>Siguiente</button>
      </div>

      {loading && <Loading></Loading>}
      {characterDetailInfo ? <CharacterDetail character={characterDetailInfo} onClick={(newCharacterDetailId) => {
        setCharacterDetailId(newCharacterDetailId);
        setCharacterDetailInfo(null);
      }}></CharacterDetail> : ""}
    </div>
  );
}

export default CharactersManager;