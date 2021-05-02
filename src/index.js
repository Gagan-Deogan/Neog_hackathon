import "./assests/css/index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { LoaderProvider } from "./Context/LoaderContext";
import { SidebarContextProvider } from "./Context/SidebarContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoaderProvider>
        <AuthProvider>
          <SidebarContextProvider>
            <App />
          </SidebarContextProvider>
        </AuthProvider>
      </LoaderProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
