import React, { useContext, useEffect, useRef } from 'react'
import { BankContext } from '../App';


const ButtonRef = ({action, text}) => {
  //WHEN THE COMPONENT RERENDERS, THIS BUTTON DOES NOT RERENDER
  const buttonRef = useRef(null);
  const {count, setCount} = useContext(BankContext);

  const renderBuffer = text != "+1" && text != "-1" && (text != (buttonRef.current ? buttonRef.current.textContent : ""));

  console.log(count);
  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  const handleClick = () => {
    buttonRef.current.textContent = renderBuffer ? buttonRef.current.textContent :`Gas Prices are increasing`;
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
    <>
      {renderBuffer && <p>This button has not updated after render bc of useRef button in dom</p>}
      <button ref={buttonRef} onClick={handleClick}></button>
    </>
    
  )
}

export default ButtonRef