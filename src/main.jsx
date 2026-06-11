import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./components/resetCSS/reset.css";
import App from "./App.jsx";
import "./components/fontFace.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
