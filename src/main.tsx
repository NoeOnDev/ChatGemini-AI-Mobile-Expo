import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/Main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
