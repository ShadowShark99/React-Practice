import { useReducer, useState } from "react"
import ButtonRef from "./ButtonRef"
import { reducer } from "../reducer"
import CustomInput from "./CustomInput"

const Bank = () => {

  const[balance, dispatch] = useReducer(reducer, {count: 0});
  const[val, setVal] = useState(0);


  const incrementCount = () => {
    dispatch({
      type: "incremented_count",
      value: 0,
    });
  };

  const decrementCount = () => {
    dispatch({
      type: "decremented_count",
      value: 0,
    });
  };

  const setCount = (x) => {
    dispatch({
      type: "set_count",
      value: x,
    });
  };


  return (
    <div>
      <div>Hi welcome to the Bank!</div>
      <div>current balance: {balance.count}</div>
        <CustomInput val={val} setVal={setVal}>Set bal to: </CustomInput>
        <ButtonRef action={() => incrementCount()} text="+1"></ButtonRef>
        <ButtonRef action={() => decrementCount()} text="-1"></ButtonRef>
        <ButtonRef action={() => setCount(val)} text={val}></ButtonRef>
      
      </div>
  )
}

export default Bank