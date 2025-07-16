import { useState } from 'react'
import './App.css'
import HelloWorld from './components/HelloWorld'
import Button from './components/Button'
import Person from './components/Person'
import ClassInput from './components/ClassInput'
import FunctionalInput from './components/FunctionalInput'
import { Link } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HelloWorld/>
      <Button>

      </Button>
      <Person/>
      <ClassInput name="Poop"/>
      <nav>
        <ul>
          <li>
            <Link to="profile/login">Profile page</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default App
