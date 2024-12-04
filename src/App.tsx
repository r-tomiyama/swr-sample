import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SampleA } from './components/SampleA'
import { SampleB } from './components/SampleB'
import { SampleC } from './components/SampleC'

function App() {
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
      <SampleA />
      <SampleB />
      <SampleC />
    </>
  )
}

export default App
