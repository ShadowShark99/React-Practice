import React, { useState } from 'react'


const CustomInput = ({val,setVal}) => {


  return (
    <input type="text" value={val} onChange = {(e) => setVal(e.target.value)}/>
  )
}

export default CustomInput