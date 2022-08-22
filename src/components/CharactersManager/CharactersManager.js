import React from "react";
import Loading from "../Loading/Loading";
import Character from "../Character/Character";
import "./CharactersManager.css";

const API_URL = "https://api.disneyapi.dev/characters?page=";

const CharactersManager = () => {
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [maxPages, setMaxPages] = React.useState(150);
  const [disneyCharacters, setDisneyCharacterse] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    const fullApiUrl = `${API_URL}${currentPage}`;
    fetch(fullApiUrl)
      .then(response => response.json())
      .then(data => {
        setDisneyCharacterse(data.data);
        setMaxPages(data.totalPages);
        setLoading(false);
      });

  }, [currentPage]);

  return (
    <div className="characters-manager">
      <h2 className="characters-manager__title">Personajes Disney</h2>

      <div className="characters-manager__grid">
        {disneyCharacters.map(character => <Character key={character._id} className="characters-manager__item" character={character}></Character>)}
      </div>

      <div className="characters-manager__pager">
        <button disabled={currentPage===1} className="characters-manager__pager-button" onClick={() => setCurrentPage(currentPage - 1)}>Anterior</button>
        <span className="characters-manager__current">{currentPage}</span>
        <button disabled={currentPage===maxPages} className="characters-manager__pager-button" onClick={() => setCurrentPage(currentPage + 1)}>Siguiente</button>
      </div>

      {loading && <Loading></Loading>}
    </div>
  );
}

export default CharactersManager;