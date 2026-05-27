import React from "react";
import { Link } from "react-router-dom";
import OshawottIcon from "../assets/oshawottIcon.png";

import Avatar from "../assets/walter.png";

import "./Trainer.css";

function TrainerPage() {

  return (

    <div className="trainer-page">

      <div className="trainer-card">

        <img
          src={Avatar}
          alt="avatar"
          className="trainer-avatar"
        />

        <h1 className="title">
          Treinador
        </h1>

        <div className="trainer-info">

          <p>Thiago Luz</p>

          <p>28 anos</p>

          <p>Nickname: Th</p>

          <p>Pokémons: 1</p>

        </div>

        <div className="pokeball-area">

          <Link to="/pokemon/froakie">

            <button className="pokeball">

              <div className="pokeball-top"></div>

              <div className="pokeball-center"></div>

              <div className="pokeball-bottom"></div>

            </button>

          </Link>
          <Link to="/pokemon/oshawott">

            <button className="pokeball">

            

              <div className="pokeball-top"></div>

              <div className="pokeball-center"></div>

              <div className="pokeball-bottom"></div>

            </button>

          </Link>

        </div>

      </div>

    </div>

  );
}

export default TrainerPage;