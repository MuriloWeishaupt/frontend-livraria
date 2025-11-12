import Login from './screens/Login/Login'
import Register from './screens/Cadastro/Register'
import Home from './screens/Home/Home'
import Admin from './screens/Admin/Admin'
import Author from './screens/Author/Author'
import ListarLivros from './screens/ListarLivros/ListarLivros'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ProtectedRouter from './helpers/protectedRouter'
import NotFound from './screens/NotFound/NotFound'
import EditaPerfil from './screens/EditaPerfil/EditaPerfil'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path='/Home' element={
          <ProtectedRouter>
            <Home />
          </ProtectedRouter>} />
        <Route path='/GetBooks' element={
          <ProtectedRouter>
            <ListarLivros />
          </ProtectedRouter>} />
        <Route path='*' element={<NotFound />} />
        <Route path='/Admin' element={
          <ProtectedRouter>
            <Admin />
          </ProtectedRouter>} />
          <Route path='/Profile' element={
          <ProtectedRouter>
            <EditaPerfil />
          </ProtectedRouter>} />
          <Route path='/Authors' element={
          <ProtectedRouter>
            <Author />
          </ProtectedRouter>} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
    </>
  )
}

export default App
