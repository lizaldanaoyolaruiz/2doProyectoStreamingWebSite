import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import { LoginPage } from './pages/login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<LoginPage/>} path='/login' />
      </Routes>
    </BrowserRouter>
  )
}

export default App