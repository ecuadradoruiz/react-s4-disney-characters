import React from "react";
import "./CharacterDetail.css";

const CharacterDetail = (props) => {

  return (
    <div className="character-detail" onClick={() => props.onClick(null)}>
      <div className="character-detail__info">

        <h1>{props.character.name}</h1>
        <img alt={props.character.name} src={props.character.imageUrl} />
        {props.character.allies && props.character.allies.length ? <p>Aliados: {props.character.allies.map((ally) => <span key={ally}>{ally}, </span>)}</p> : ''}
        {props.character.enemies && props.character.enemies.length ? <p>Enemigos: {props.character.enemies.map((enemy) => <span key={enemy}>{enemy}, </span>)}</p> : ''}
        {props.character.films && props.character.films.length ? <p>Películas: {props.character.films.map((film) => <span key={film}>{film}, </span>)}</p> : ''}
        {props.character.parkAttractions && props.character.parkAttractions.length ? <p>Atracciones: {props.character.parkAttractions.map((attr) => <span key={attr}>{attr}, </span>)}</p> : ''}
        {props.character.shortFilms && props.character.shortFilms.length ? <p>Cortos: {props.character.shortFilms.map((short) => <span key={short}>{short}, </span>)}</p> : ''}
        {props.character.tvShows && props.character.tvShows.length ? <p>Series de TV: {props.character.tvShows.map((tvShow) => <span key={tvShow}>{tvShow}, </span>)}</p> : ''}
        {props.character.videoGames && props.character.videoGames.length ? <p>Videojuegos: {props.character.videoGames.map((game) => <span key={game}>{game}, </span>)}</p> : ''}

      </div>
    </div>
  );

}


export default CharacterDetail;

