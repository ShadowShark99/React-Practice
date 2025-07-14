import { useState } from "react";
import CustomInput from "./CustomInput";

function Person() {
  const [person, setPerson] = useState({ firstName: "John", lastName: "", age: 100 });
  // const [firstName, setFirstName] = useState(person.name);
  // const [lastName, setLastName] = useState("");

  const setFirstName = (newFirstName) => {
    const newPerson = {...person, firstName: newFirstName};
    setPerson(newPerson);
  };

  const setLastName = (newLastName) => {
    const newPerson = {...person, lastName: newLastName};
    setPerson(newPerson);
  };

  let fullName = person.firstName + ' ' + person.lastName;

  // const handleIncreaseAge = () => {
  //   console.log("in handleIncreaseAge (before setPerson call): ", person);
  //   setPerson({ ...person, age: person.age + 1 });
  //   // we've called setPerson, surely person has updated?
  //   console.log("in handleIncreaseAge (after setPerson call): ", person);
  // };
  const handleIncreaseAge = () => {
    setPerson({...person,age: person.age + 1});
    setPerson({...person,age: person.age + 1});
    // setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
    // setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  };
  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  

  return (
    <>
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <CustomInput val={person.firstName} setVal={setFirstName}></CustomInput>
      <CustomInput val={person.lastName} setVal={setLastName}></CustomInput>
    </>
  );
}

export default Person