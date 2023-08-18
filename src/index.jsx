import React from "react";
import ReactDOM from "react-dom/client";
import VideoPage from "./pages/video/VideoPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/layout/Navbar";

import avatarImg from "./assets/images/Mohan-muruge.jpg";

const AppLayout = () => {
  return (
    <>
      <NavBar avatarImg={avatarImg} userName={"User"} />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <VideoPage />,
      },
      {
        path: "/:id",
        element: <VideoPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
