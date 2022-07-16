import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-mtlnc2mt.us.auth0.com"
      clientId="dMwDvv10yswtIot4Qg73z74oVqboE0cZ"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
