import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import ProtectedRoute from "./components/router/ProtectedRoute";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<div>Login</div>} />
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<div>Dashboard</div>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
