import React from 'react'
import ReactDOM from 'react-dom/client'
import Explorer from './explorer.jsx'
import './App.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <main class="explorer">
    <iframe class="preview" name="preview"></iframe>
    <hr></hr>
    <Explorer />
  </main>
  </React.StrictMode>
);