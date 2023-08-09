import { useState } from 'react'
import './App.css'
import './App.css'
import { CssBaseline } from '@mui/material'
import TodoList from './TodoList'
import NavBar from './NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CssBaseline/>
      <NavBar/>
      <TodoList/>
    </div>
  )
}

export default App
