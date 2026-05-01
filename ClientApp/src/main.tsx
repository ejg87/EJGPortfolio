import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/main.scss'

// StrictMode — runs extra checks in development only
// Helps catch bugs early, has no effect in production

// BrowserRouter — enables React Router
// Wraps the entire app so any component can use routing hooks
// like useNavigate, useLocation, Link etc

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
)