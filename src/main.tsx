import React from "react";
import ReactDOM from "react-dom/client";
import './styles/main.css';
import { App } from "./containers/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
