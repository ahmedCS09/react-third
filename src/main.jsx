import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import ContextProvider  from './Context/ContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <ContextProvider>
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  </ContextProvider>
)
