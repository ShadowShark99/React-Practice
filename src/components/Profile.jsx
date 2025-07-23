import { Outlet, useParams } from "react-router-dom";
import HomeButton from "./HomeButton";
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import { useState } from "react";
import ProfilePage from "./ProfilePage";
import CustomInput from "./CustomInput";


const Profile = () => {

  const { name } = useParams();
  const [profiles, setProfiles] = useState([
    ["popeye", "Popeye the sailor eats lots of spinach"],
    ["spinach", "Hi, I am Spina- ahhhhhh! *gets eaten*"]
  ]);
  // if(localStorage.getItem("profile-database"))
  // {
  //   setProfiles(localStorage.getItem("profile-datebase"));
  // }
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  

  const renderProfile = () => {
    const n = profiles.length;
    let profile = (<DefaultProfile/>);

    for(let i = 0; i < n; i++)
    {
      if(name === profiles[i][0])
      {
        profile = (<ProfilePage name={profiles[i][0]} description={profiles[i][1]}/>);
      }
    }
    return (
      profile
    );
  };

  const createProfile = () => {
    const newProfile = [username, description];
    const newProfiles = [...profiles, newProfile];
    for(let i = 0; i < profiles.length; i++)
    {
      if(profiles[i][0] === username)
          return; //profile already exists
    }
    //console.log(newProfiles);
    setProfiles(newProfiles);
    //localStorage.setItem("profile-database", newProfiles);

  };

  return (<div>
    <h1>Hello from prifle page!</h1>
    <p>So... how are you?</p>
    <HomeButton></HomeButton>
    <h2>Current Profile: </h2>
    {renderProfile()}
    <h3>Make New Profile!</h3>
    <CustomInput val={username} setVal={setUsername}>username: </CustomInput>
    <CustomInput val={description} setVal={setDescription}>description: </CustomInput>
    <button onClick={()=>{createProfile()}}>Add Profile</button>
  </div>)
};

export default Profile;