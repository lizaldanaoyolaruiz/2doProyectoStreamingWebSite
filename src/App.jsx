import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
<<<<<<< HEAD
import { LoginPage } from './paginas/login'
import AdminPage from './paginas/Admin'
import ProtectedRoutes from './paginas/protectedRoutes'
import HomePage from './pages/home'
import MovieDetail from './pages/movieDetail'
=======
import { LoginPage } from './pages/Login'
import Home from './pages/Home'
>>>>>>> d335d20cdad938b8406153f7edf5ad432cf5a429

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
          <Route element={<HomePage/>} path='/'/>
          <Route element={<LoginPage/>} path='/login'/>
          <Route element={<MovieDetail/>} path='/movie/:id'/>
          <Route element={<ProtectedRoutes/>}>
            <Route element={<AdminPage/>} path='/admin'/>
          </Route>
      </Routes> 
=======
        <Route element={<Home />} path="/" />
        <Route element={<LoginPage />} path="/Login" />
      </Routes>
>>>>>>> d335d20cdad938b8406153f7edf5ad432cf5a429
    </BrowserRouter>
  )
}

export default App