import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Oshawott from '../assets/oshawottIcon.png'

import '../Oshawott.css';

function CardOshawott() {

  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    const getData = async () => {

      try {

        const res = await axios.get(
          'https://pokeapi.co/api/v2/pokemon/oshawott'
        );

        setPokemons(res.data);

        setLoading(false);

      }

      catch (err) {

        console.error("Erro ao carregar API", err);

        setLoading(false);

        setError(true);

      }

    };

    getData();

  }, []);

  if (loading)
    return (
      <div className="loader">
        <p>Carregando Pokédex...</p>
      </div>
    )

  if (error)
    return (
      <div className="error">
        <p>Ocorreu um erro inesperado</p>
      </div>
    )

  return (

    <div className="container">

      <h1>Poke card</h1>

      <div className="pokemon-container">

        <div className="pokemon-card">

          <h3>{pokemons.name}</h3>

          <img
            src={Oshawott}
            alt={pokemons.name}
            height="400"
          />

          <div className="stats">

            <div className="stat">
              <span>HP: {pokemons.stats[0].base_stat}</span>
            </div>

            <div className="stat">
              <span>ATTACK: {pokemons.stats[1].base_stat}</span>
            </div>

            <div className="stat">
              <span>--</span>
            </div>

            <div className="stat">
              <span>--</span>
            </div>

          </div>

          <div className="types">

            {pokemons.types.map((type, index) => (

              <span
                key={index}
                className={`type ${type.type.name}`}
              >
                {type.type.name}
              </span>

            ))}

          </div>

        </div>

      </div>

    </div>

  );
}

export default CardOshawott;