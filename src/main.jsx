import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { EcoCycleProvider } from "./context/EcoCycleContext.jsx";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <EcoCycleProvider>
        <App />
      </EcoCycleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
