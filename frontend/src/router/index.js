import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Index";
import Singup from "../pages/Singup/Index";
import App from "../App";

export default createBrowserRouter([
  {
    path:"/",
    Component:App,
    children:[
        {
            path: "/",
            index:true,
            Component: Home,
          },
          {
            path: "/singup",
            Component: Singup,
          },
    ]
  }
]);