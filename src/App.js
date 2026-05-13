
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TrainerPage from "./pages/TrainerPage";
import Card from "./pages/Card";
import CardOShawott from "./pages/CardOShawott";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<TrainerPage />}
        />

        <Route
          path="/pokemon"
          element={<Card />}
        />

        <Route
          path="/oshawott"
          element={<CardOShawott />}
        />
      </Routes>

    </BrowserRouter>

  );
}

export default App;