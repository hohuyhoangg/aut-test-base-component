import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./utils/trueTestDetector";

const rootElement = document.getElementById("root");
if (rootElement) {
  console.log('Run code within dev branch and clean storage on load');
  // localStorage.clear();
  sessionStorage.clear();
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error("Root element not found");
}
