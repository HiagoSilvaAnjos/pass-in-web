import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import "./index.css";

//      REACT JS
// Componentes e Propriedades
/*
  Componentes => Funções que retornam HTML
*/

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
