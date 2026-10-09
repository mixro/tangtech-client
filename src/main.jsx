import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import "./styles/global.css";

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

const root = document.getElementById("root");
// Prerendered pages already contain HTML: hydrate it. In `vite dev` the root is empty.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
