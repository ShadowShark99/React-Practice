import { Link } from "react-router-dom";
import HomeButton from "./HomeButton";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <h3>You can go back to the home page by clicking here, though!</h3>
      <HomeButton></HomeButton>

    </div>
  );
};

export default ErrorPage;
