import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRoutes from "./UserRoutes";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard/dashboard";
import ProdutosPage from "./pages/dashboard/produtos";
import CategoriasPage from "./pages/dashboard/categorias";

import 'react-loading-skeleton/dist/skeleton.css'
import MesasPage from "./pages/dashboard/mesas";
import PedidosPage from "./pages/dashboard/pedidos";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<UserRoutes />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/produtos" element={<ProdutosPage />} />
            <Route path="/dashboard/categorias" element={<CategoriasPage/>}/>
            <Route path="/dashboard/mesas" element={<MesasPage/>}/>
            <Route path="/dashboard/pedidos" element={<PedidosPage/>}/>

            {/* Not found route */}
            <Route path="*" element={<div>Page not found!</div>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
