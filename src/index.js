import React from "react";
import ReactDOM from "react-dom/client";
import "./Css/index.css";
import "./Css/bulma.min.css";
import "./Css/hover.css";
import { BrowserRouter } from "react-router-dom";
import App from "./home";
import Videos from "./videos";
import { Auth0Provider } from "@auth0/auth0-react";
import AlertifyTest from "./Componentes/Elements/alertifyTest";
import Menubar from "./Componentes/NavBar";

export function Alertas() {
  return (
    <div className="App">
      <AlertifyTest />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-xb-8m80m.us.auth0.com"
      clientId="3baeGoxny7190uFl6CQfn7b46tkiWaXy"
      redirectUri={window.location.origin}
    >
      <Menubar />
      <App />
      <Videos />
    </Auth0Provider>
  </BrowserRouter>
);
