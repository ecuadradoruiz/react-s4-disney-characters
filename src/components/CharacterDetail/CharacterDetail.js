import React from "react";
import "./CharacterDetail.css";

const CharacterDetail = (props) => {

  return (
    <div className="character-detail" onClick={() => props.onClick(null)}>
      <div className="character-detail__info">

        <h1 className="character-detail__title">{props.character.name}</h1>
        <img alt={props.character.name} src={props.character.imageUrl} />
        {props.character.allies && props.character.allies.length ? <p><strong>Aliados:</strong> {props.character.allies.map((ally) => <span key={ally}>{ally}, </span>)}</p> : ''}
        {props.character.enemies && props.character.enemies.length ? <p><strong>Enemigos:</strong> {props.character.enemies.map((enemy) => <span key={enemy}>{enemy}, </span>)}</p> : ''}
        {props.character.films && props.character.films.length ? <p><strong>Películas:</strong> {props.character.films.map((film) => <span key={film}>{film}, </span>)}</p> : ''}
        {props.character.parkAttractions && props.character.parkAttractions.length ? <p><strong>Atracciones:</strong> {props.character.parkAttractions.map((attr) => <span key={attr}>{attr}, </span>)}</p> : ''}
        {props.character.shortFilms && props.character.shortFilms.length ? <p><strong>Cortos:</strong> {props.character.shortFilms.map((short) => <span key={short}>{short}, </span>)}</p> : ''}
        {props.character.tvShows && props.character.tvShows.length ? <p><strong>Series de TV:</strong> {props.character.tvShows.map((tvShow) => <span key={tvShow}>{tvShow}, </span>)}</p> : ''}
        {props.character.videoGames && props.character.videoGames.length ? <p><strong>Videojuegos:</strong> {props.character.videoGames.map((game) => <span key={game}>{game}, </span>)}</p> : ''}

      </div>
    </div>
  );

}


export default CharacterDetail;

