function Button({text = "Click Me!", color = "blue", fontSize = 12}){
  const buttonStyle = {
    color,
    fontSize: fontSize + 'px'
  }


  return <>
    <button style={buttonStyle}>{text}</button>
  </>
}

export default Button