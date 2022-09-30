import React from "react";
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import './styles/pokemonDetail.css'

const CharacterDetail = () => {

  const { id } = useParams()
  const [pokemon, setPokemon] = useState({})



  useEffect(() => {
     axios.get(  `https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
      }, []);

   console.log(pokemon)










  return (
    <div className="pokemonDetail">
      <div className="full-container">
        <div className="container1">

          <div className="main-container">
            <div className="main-image-container">
              <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
              <div className="data">
                <div className="data-weight">
                  <p className="pokemon-data">
                    {pokemon.weight}<br/>
                  </p>
                  Weight
                </div>
                <div className="data-height">
                  <p className="pokemon-data">
                    {pokemon.height}<br/>
                  </p>
                  Height
                </div>
              </div>
              <h1 className="pokemon-name">{pokemon.name}</h1>
            </div>
          </div>
          <div className="second-container">

            <div className="type-container">
              <div className="type1">
                {pokemon.types?.[0].type.name}
              </div>
              <div className="type2">
                {pokemon.types?.[1].type.name}
              </div>
            </div>

            <div className="abilities-container">
              <div className="abilitie1 abilitie">
                {pokemon.abilities?.[0].ability.name}
              </div>
              <div className="abilitie2 abilitie">
                {pokemon.abilities?.[1].ability.name}
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <ul className="movement-list">
            {
              pokemon.moves?.map(move =>
                <li key={move.move.url}>{move.move.name}</li>
              )
            }
          </ul>


        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
