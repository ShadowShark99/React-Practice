import { Outlet } from "react-router-dom";
import HomeButton from "./HomeButton";


const Profile = () => {
  return (<div>
    <h1>Hello from prifle page!</h1>
    <p>So... how are you?</p>
    <HomeButton></HomeButton>
    <Outlet></Outlet>
  </div>)
};

export default Profile;