
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TrainerPage from "./pages/TrainerPage";
import Card from "./pages/Card.js";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<TrainerPage />}
        />

        <Route
          path="/pokemon/:id"
          element={<Card />}
        />

      
      </Routes>

    </BrowserRouter>

  );
}

export default App;