import { createContext, useState } from 'react'
import './App.css'
import HelloWorld from './components/HelloWorld'
import Button from './components/Button'
import Person from './components/Person'
import ClassInput from './components/ClassInput'
import FunctionalInput from './components/FunctionalInput'
import { Link } from 'react-router-dom'
import ButtonRef from './components/ButtonRef'
import Bank from './components/Bank'

export const BankContext = createContext(null);

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <Person/>
      <ClassInput name="Your Name"/>
      <nav>
        <ul>
          <li>
            <Link to="profile/login">Profile page</Link>
          </li>
        </ul>
      </nav>
      <div>Random count var that increments each bank transaction (Gas Prices): {count}</div>
      <BankContext.Provider value={{count,setCount}}>
        <Bank></Bank>
      </BankContext.Provider>

      
    </>
  )
}

export default App
