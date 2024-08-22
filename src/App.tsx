import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/Router/ProtectedRoutes";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<div>Dashboard</div>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
