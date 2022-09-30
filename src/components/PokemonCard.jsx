import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import './styles/pokemonCard.css'

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState({});

  const navigate = useNavigate();


  const [borderColor, setBorderColor] = useState("red");


  const changeBorderColor = () =>{

  }

  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data));
  }, []);

  console.log(pokemon);

//
  return (
    <div className="container">

      <div  className="card" style={{ border: `2px solid ${ borderColor }`}} onClick={() => navigate(`/pokemons/${pokemon.id}`)}>
        <div className="image-container" >
          <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
        </div>
        <div className="info-container">
          <h3 className="pokemon-title">{pokemon.name}</h3>
          <div className="pokemon-type">
            <h2>Type: {pokemon.types?.[0].type.name}</h2>
          </div>
          <ul className="details-list">
            <li
              className="list-item"
              key={pokemon.name}>
              HP: <br/>
              <p className="stat">
                {pokemon.stats?.[0].base_stat}
              </p>
            </li>
            <li
              className="list-item"
              key={pokemon.name}>
              DEFENSE: <br/>
              <p className="stat">
                {pokemon.stats?.[2].base_stat}
              </p>
            </li>
            <li
              className="list-item"
              key={pokemon.name}>
              ATACK: <br/>
              <p className="stat">
                {pokemon.stats?.[1].base_stat}
              </p>
            </li>
            <li
              className="list-item"
              key={pokemon.name}>
              SPEED: <br/>
              <p className="stat">
                {pokemon.stats?.[5].base_stat}
              </p>
            </li>
          </ul>


        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
