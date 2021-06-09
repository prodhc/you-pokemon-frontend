import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Home = () => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/pokemon/1')
        .then((res) => {
            console.log(res)
            setPokemon(res.data)
        })
        .catch((err) => {
            console.log('err: ', err)
        })
    })
    return (
        <div>
            <h2>{pokemon.pokemonName}</h2>
            <h3>{pokemon.customName}</h3>
            <p>{pokemon.type}</p>
            <p>{pokemon.level}</p>
        </div>
    )
}

export default Home
