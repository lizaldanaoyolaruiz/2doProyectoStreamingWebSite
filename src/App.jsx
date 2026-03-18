import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { LoginPage } from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<LoginPage />} path="/Login" />
      </Routes>
    </BrowserRouter>
  )
}

export default App