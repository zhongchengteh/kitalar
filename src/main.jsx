import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { EcoCycleProvider } from "./context/EcoCycleContext.jsx";
import "./styles/globals.css";

const routerBaseName = import.meta.env.BASE_URL.replace(/\/$/, "");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={routerBaseName}>
      <EcoCycleProvider>
        <App />
      </EcoCycleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
