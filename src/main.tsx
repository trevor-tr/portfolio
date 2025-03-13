import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ReactLenis from "lenis/react";
import "./i18n/i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactLenis root>
      <App />
    </ReactLenis>
  </StrictMode>,
);
