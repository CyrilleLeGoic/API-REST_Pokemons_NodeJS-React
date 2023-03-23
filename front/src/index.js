import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
/* browser */
import { BrowserRouter } from "react-router-dom";
/* import provider */
import { ModalProvider } from "./context/ModalContext";
/* import provider */
import { LoginProvider } from "./context/LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LoginProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
    </LoginProvider>
  </BrowserRouter>
);

