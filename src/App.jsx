
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { LoginPage } from './pages/temp'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
          <Route element={<LoginPage/>} path='/Login'/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
