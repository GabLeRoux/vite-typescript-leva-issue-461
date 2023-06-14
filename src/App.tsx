import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { useControls } from 'leva'

function MyComponent() {
  const { name, aNumber } = useControls({ name: 'World', aNumber: 0 })

  return (
    <div>
      Hey {name}, hello! {aNumber}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <MyComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount(count => count + 1)}>count is: {count}</button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
