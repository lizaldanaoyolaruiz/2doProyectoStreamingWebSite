
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { LoginPage } from './paginas/login'
import Home from './paginas/home'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
          <Route element={<LoginPage/>} path='/Login'/>
          <Route element={<Home/>} path='/'/>
          
      </Routes> 
    </BrowserRouter>
  )
}

export default App
