import { Outlet, useParams } from "react-router-dom";
import HomeButton from "./HomeButton";
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";


const Profile = () => {

  const { name } = useParams();

  return (<div>
    <h1>Hello from prifle page!</h1>
    <p>So... how are you?</p>
    <HomeButton></HomeButton>
    <h2>Current Profile: </h2>
    {name ==="popeye" ? (
      <Popeye></Popeye>
    ) : name ==="spinach" ? (
      <Spinach/>
    ) : (
      <DefaultProfile/>
    )}
  </div>)
};

export default Profile;