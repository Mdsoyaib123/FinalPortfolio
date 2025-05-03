import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import toast, { Toaster } from "react-hot-toast";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectDetails from "./Component/projectDetails/ProjectDetails.jsx";
import AllBlog from "./Component/Blog/AllBlog.jsx";
import BlogDetails from "./Component/Blog/BlogDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/project-details/:id",
    element: <ProjectDetails></ProjectDetails>,
  },
  {
    path: "/all-blogs",
    element: <AllBlog></AllBlog>,
  },
  {
    path: "/blog-details/:id",
    element: <BlogDetails></BlogDetails>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
