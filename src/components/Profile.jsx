import { Outlet, useParams } from "react-router-dom";
import HomeButton from "./HomeButton";
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import { useState } from "react";
import ProfilePage from "./ProfilePage";


const Profile = () => {

  const { name } = useParams();
  const [profiles, setProfiles] = useState([["popeye", "Popeye the sailor eats lots of spinach"],["spinach","Hi, I am Spina- ahhhhhh! *gets eaten*"]]);

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

  return (<div>
    <h1>Hello from prifle page!</h1>
    <p>So... how are you?</p>
    <HomeButton></HomeButton>
    <h2>Current Profile: </h2>
    {renderProfile()}
  </div>)
};

export default Profile;