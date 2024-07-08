import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./context.jsx";
import { RouterProvider } from "react-router-dom";
import Router from "./Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={Router}></RouterProvider>
    </ContextProvider>
  </React.StrictMode>
);
