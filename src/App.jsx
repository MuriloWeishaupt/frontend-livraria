import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// Telas
import Login from "./screens/Login/Login";
import Register from "./screens/Cadastro/Register";
import Home from "./screens/Home/Home";
import Admin from "./screens/Admin/Admin";
import Author from "./screens/Author/Author";
import ListarLivros from "./screens/ListarLivros/ListarLivros";
import NotFound from "./screens/NotFound/NotFound";
import EditaPerfil from "./screens/EditaPerfil/EditaPerfil";


import ProtectedRouter from "./helpers/protectedRouter";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/home" /> : <Register />}
          />

          {/* <Route element={<ProtectedRouter />}> */}
            <Route path="/home" element={<Home />} />
            <Route path="/getbooks" element={<ListarLivros />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<EditaPerfil />} />
            <Route path="/authors" element={<Author />} />
          {/* </Route> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
}

export default App;
