import React, { use, useContext, useEffect, useRef } from 'react'
import { BankContext } from '../App';


const ButtonRef = ({action, text}) => {
  const buttonRef = useRef(null);
  const {count, setCount} = useContext(BankContext);
  console.log(count);
  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  const handleClick = () => {
    buttonRef.current.textContent = `Gas Prices are increasing`;
    let timeout = setTimeout(() => {
      buttonRef.current.textContent = text;
    }, 2000);
    action();
    setCount(count + 5);
    
  };

  //does not trigger a rerender?
  useEffect(() => {
  buttonRef.current.focus();
  buttonRef.current.textContent = "Hey, I'm different!";
  let timeout = setTimeout(() => {
    buttonRef.current.textContent = text;
  }, 2000);

  return () => {
    clearTimeout(timeout);
  };
}, []);


  return (
    <button ref={buttonRef} onClick={handleClick}></button>
  )
}

export default ButtonRef