import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Topbar from './components/Topbar.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex-row'>
     
      <App />
    </div>
   
  </StrictMode>,
)
