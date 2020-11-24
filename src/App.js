/* global fetch */
import React, { useState, useEffect } from 'react';
import './App.css';
import PostcodeForm from './PostcodeForm.js';

const App = () => {
  const [message, setMessage] = useState('message')
  const [title, setTitle] = useState('title')

  useEffect(() => {
    async function fetchData () {
      try {
        let data = await (await fetch('/api')).json()
        document.title = data.title
        setMessage(data.message)
        setTitle(data.title)
      } catch (err) {
        setMessage(err.message)
      }
    }
    fetchData()
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>{message}</p>
        <PostcodeForm/>
      </header>
    </div>
  );
}

export default App;
