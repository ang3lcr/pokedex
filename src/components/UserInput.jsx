import React from "react";
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import { changeName } from '../store/slices/userName.slice'
import {useNavigate} from 'react-router-dom'
import './styles/userInput.css'

const UserInput = () => {

  const dispatch = useDispatch()
  const [userName, setUserName] = useState("");

  const navigate = useNavigate()

  const dispatchUserName = () => {
    dispatch(changeName(userName))
    navigate("/pokemons")
  }

  return (

    <div className="user-input">
      <div className="div-main">

        <h1>Welcome to <span>Pokedex</span></h1>

        <div className="input-container">
          <input
            type="text"
            id="name"
            className="name-input"
            placeholder="Write your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <button className="button-60" role="button" onClick={dispatchUserName}>Accept</button>
      </div>
    </div>
  );
};

export default UserInput;
