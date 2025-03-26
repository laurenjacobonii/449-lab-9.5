import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const funFacts = [
  { id: 1, title: "The Great Wall of China is not visible from space with the naked eye.", isTrue: true },
  { id: 2, title: "The human brain continues to grow and develop until around the age of 25.", isTrue: true },
  { id: 3, title: "The average person spends more time on their phone than they do sleeping.", isTrue: false },
];


function FunFact() {
  return (
    <div>
      <h2>Fun Fact!</h2>
      <ul>
        {funFacts.map((fact) => (
          <li 
          key={fact.id}
          style={{
            color: fact.isTrue ? 'green' : 'red'
          }}
          >
            {fact.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

function EmailEntry() {
  return (
    <form action="Email">Enter your email:
        <input type="email"></input>
    </form>
  )
}

function RandomComp() {
  return (
    <div>
      <h1>Did you have a good day?</h1>
      <div>
        <button>Yes!</button>
        <button>No.</button>
      </div>
    </div>
  )

}



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Lauren Jacoboni Lab 9.5 : Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <EmailEntry />
      <FunFact />
      <RandomComp />
    </>
  )
}

export default App
