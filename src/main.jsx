import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
// aca va el import de sooner
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import { Toaster } from 'sonner'
>>>>>>> d335d20cdad938b8406153f7edf5ad432cf5a429

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster/>
    <App />
  </StrictMode>,
)
