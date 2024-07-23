import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Layout";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<Layout />);
} else {
  console.error("Root element not found");
}
