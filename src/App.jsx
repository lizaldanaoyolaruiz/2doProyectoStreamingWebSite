import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { LoginPage } from './pages/Login'
import Home from './pages/Home'
import AdminPage from './pages/admin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<LoginPage/>} path="/Login" />
        <Route element={<ProductDetail />} path='/product/:id'/>
        <Route element={<ProtectedRoutes/>}>
          <Route element={<AdminPage/>} path='/admin'/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
import AdminPage from './pages/admin'

export default App