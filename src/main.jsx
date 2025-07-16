import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from './components/Profile';
import Spinach from './components/Spinach';
import Popeye from './components/Popeye';
import DefaultProfile from './components/DefaultProfile';
import ErrorPage from './components/ErrorPage';
import routes from '../routes';


const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
