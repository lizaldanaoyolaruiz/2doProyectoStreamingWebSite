
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { LoginPage } from './paginas/login'
import AdminPage from './paginas/admin'
import ProtectedRoutes from './paginas/protectedRoutes'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
          <Route element={<LoginPage/>} path='/login'/>
          <Route element={<ProtectedRoutes/>}>
            <Route element={<AdminPage/>} path='/admin'/>
          </Route>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
