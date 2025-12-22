import { useState } from 'react'

import './App.css'

import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'


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
      <MainContent />
      <Footer />


    </>
  )
}

export default App
