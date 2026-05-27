import React from 'react'
import Froakie from '../assets/foto.jpg'
import '../App.css';
import { useParams } from 'react-router';
import useFetchPokeapi from '../hooks/useFetchPokeapi';

function Card() {

  const { id } = useParams();

  const { pokemons, loading, error } = useFetchPokeapi(id);

  if (loading)
    return (
      <div className="loader">
        <p>Carregando Pokédex...</p>
      </div>
    );

  if (error)
    return (
      <div className="error">
        <p>Ocorreu um erro inesperado</p>
      </div>
    );

  return (
    <div className="container">

      <h1>Poke card</h1>

      <div className="pokemon-container">

        <div className="pokemon-card">

          <h3>{pokemons.name}</h3>

          <img
            src={Froakie}
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
              <span>DEFENSE: {pokemons.stats[2].base_stat}</span>
            </div>

            <div className="stat">
              <span>SPEED: {pokemons.stats[5].base_stat}</span>
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

export default Card;