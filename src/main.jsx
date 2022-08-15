import React from "react";
import ReactDOM from "react-dom/client";
import { GamePage } from "./pages/GamePage";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GamePage />
  </React.StrictMode>
);
