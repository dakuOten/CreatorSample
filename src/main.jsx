import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";


import Homepage from "./pages/Homepage";
import Blogpage from "./pages/Blogpage";
import ErrorPage from "./pages/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/home",
    element: <Homepage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/blog",
    element: <Blogpage/>,
    errorElement: <ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);  