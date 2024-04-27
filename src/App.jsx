import React from 'react'
import Explorer from './explorer.jsx'
import './App.css'

function App() {
  let prev = "Item preview"
  let agentlanguage = navigator.language
  if (agentlanguage.indexOf('ru') > -1) {
    prev = "Предпросмотр предмета"
  }
  return(
    <main class="explorer">
      <iframe class="preview" name="preview" title={prev}></iframe>
      <hr></hr>
      <Explorer />
    </main>
  )
}

export default App