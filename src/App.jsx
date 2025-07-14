import { useState } from 'react'
import './App.css'
import HelloWorld from './components/HelloWorld'
import Button from './components/Button'
import Person from './components/Person'
import ClassInput from './components/ClassInput'
import FunctionalInput from './components/FunctionalInput'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HelloWorld/>
      <Button>

      </Button>
      <Person/>
      <ClassInput name="Poop"/>
    </>
  )
}

export default App
