import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from 'styled-components'

import PokeCard from "./components/PokeCard";

const Div = styled.div`
  text-align: center;

`

const App = () =>{

  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState('')

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const changePokeName = (e) => {
    setPokeName(e.target.value)
  }


  return (
    <Div>
      <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            )
          })}
        </select>

        {pokeName && <PokeCard poke={pokeName} />}
    </Div>
  )
}

export default App;
