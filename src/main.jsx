import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Auth0ProviderWithNavigate from "./Auth0ProviderWithNavigate.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>{<App />}</Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>,
);
