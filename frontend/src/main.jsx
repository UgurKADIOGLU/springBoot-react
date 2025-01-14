
import { createRoot } from "react-dom/client";
import "./styles.scss";
import "../src/locales";
import { RouterProvider } from "react-router-dom";
import routers from "./router/index.js"


createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={routers} />
  
);
