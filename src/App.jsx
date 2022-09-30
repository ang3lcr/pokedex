import './App.css'
import {HashRouter, Route, Routes} from 'react-router-dom';
import UserInput from './components/UserInput'
import Pokemons from './components/Pokemons'
import PokemonDetail from './components/PokemonDetail'
import ProtectedRoutes from './components/ProtectedRoutes'


function App() {
    return (
  <HashRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<UserInput />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemons/:id" element={<PokemonDetail />} />
        </Route>

      </Routes>
    </div>
  </HashRouter>
  )
}

export default App
