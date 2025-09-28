import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TextCursor from './components/TextCursor.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <TextCursor/>
      <App />
  </StrictMode>,
)