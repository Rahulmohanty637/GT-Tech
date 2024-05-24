import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./components/Pages/Home.jsx";
import About from "./components/Pages/About.jsx";
import Service from "./components/Pages/Service.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
<Route path='/' element={<App/>}>
<Route path="" element={<Home/>}/>
<Route path="about" element={<About/>}/>
<Route path="service" element={<Service/>}/>

</Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
