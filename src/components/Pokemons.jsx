import React from "react";
import axios from 'axios'
import {useSelector} from 'react-redux'
import {useEffect, useState} from "react"
import PokemonCard from './PokemonCard'
import {useNavigate} from 'react-router-dom'
import './styles/pokemons.css'


const Characters = () => {

  const name = useSelector((state) => state.userName)
  const [pokemonList, setPokemonList] = useState([])
  const [nameInput, setNameInput] = useState("")
  const [typesList, setTypesList] = useState([])

  const navigate = useNavigate();

//GET ALL POKEMONS
  useEffect(() =>{
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then((res) => setPokemonList(res.data.results))
  }, [])


//GET ALL POKEMONS TYPE
  useEffect(() =>{
    axios.get('https://pokeapi.co/api/v2/type')
    .then((res) => setTypesList(res.data.results))
  }, [])

  console.log(typesList)

  const searchName = () => {
    navigate(`/pokemons/${nameInput}`)
  }

  const searchType = (url) => {
      axios.get(url)
    .then((res) => setPokemonList(res.data.pokemon.map(pokemon => pokemon.pokemon)))
  }

  return (
    <div className="pokemons">
      <h1 className="greeting">Hello {name}</h1>

      <input
        type="text"
        placeholder="search by name"
        value={nameInput}
        onChange={e => setNameInput(e.target.value)}
      />
      <button onClick={searchName}>Search</button>

      <div>
        <select onChange={e => searchType(e.target.value)}>
          <option value="">Select a type</option>
          {typesList.map(type => (
            <option value={type.url}>{type.name}</option>
          ))}
        </select>
      </div>


      <div className="card-container">
        {pokemonList.map((pokemon) => (
          <PokemonCard
            url={pokemon.url }
            key={pokemon.url }/>
        ))}
      </div>

    </div>
  );
};

export default Characters;
