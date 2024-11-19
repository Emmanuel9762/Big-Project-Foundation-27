import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './public/index.html'
import App from '../src/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
