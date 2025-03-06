import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Load App.jsx
import "./styles/index.css"
import "./styles/TodoList.css"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
