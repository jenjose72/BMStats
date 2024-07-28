import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthenticationProvider } from './context/AuthenticationContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthenticationProvider>
      <App />
    </AuthenticationProvider>
  </React.StrictMode>,
)
