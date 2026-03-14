
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { LoginPage } from './paginas/login'
import Navbar from './components/navbar'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar /> 
      <Routes>
          <Route element={<LoginPage/>} path='/Login'/>
          <Route element={<h1 className="text-white">Home RollZine</h1>} path='/'/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
