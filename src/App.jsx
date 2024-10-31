import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import TodOne from './components/TodOne'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodOne/>
    </>
  )
}

export default App
