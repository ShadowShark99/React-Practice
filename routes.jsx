import App from "./src/App";
import ErrorPage from "./src/components/ErrorPage";
import Profile from "./src/components/Profile";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
];

export default routes;