import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
// import Home from "./pages/home/home";
import Layout from "./layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout />
  </StrictMode>
);
