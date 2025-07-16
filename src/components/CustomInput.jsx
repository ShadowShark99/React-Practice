import React, { useState } from 'react'


const CustomInput = ({val,setVal,children=""}) => {
  const id = crypto.randomUUID();
  return (
    <div>
      <label for={id}>{children}</label>
      <input id={id} type="text" value={val} onChange = {(e) => setVal(e.target.value)}/>
    </div>
    
  )
}

export default CustomInput