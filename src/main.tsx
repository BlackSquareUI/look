import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import "./assets/css/index.css"

ReactDOM.createRoot(document.getElementById('blackSquareUI')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
