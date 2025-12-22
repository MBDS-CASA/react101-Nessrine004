import { useState } from 'react'

import './App.css'

function Header() {
  return (
    <header style={{ textAlign: "center", padding: "20px" }}>
      <img
        src="/app_logo.webp"
        alt="Logo de la formation"
        style={{
          width: "220px",   
          marginBottom: "20px"
        }}
      />
      <h1>Introduction à React</h1>
      <h3>À la découverte des premières notions de React</h3>
    </header>
  );
}


function Content() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}

function App() {

  return (
    <>

      <Header />

      <h1>MBDS</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
