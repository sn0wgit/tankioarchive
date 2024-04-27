import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import Main from './main.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<BrowserRouter>
      <Routes>
        <Route path="tankioarchive/" element={<Main />} />
        <Route path="tankioarchive/garage-items/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
