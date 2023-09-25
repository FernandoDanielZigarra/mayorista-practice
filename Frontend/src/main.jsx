import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ProviderRouter } from "./routes/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderRouter />
  </React.StrictMode>
);
