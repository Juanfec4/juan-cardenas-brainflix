import React from "react";
import ReactDOM from "react-dom/client";
import VideoPage from "./pages/video/VideoPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/layout/Navbar";

import UploadPage from "./pages/upload/UploadPage";
import Divider from "./components/ui/Divider";

const AppLayout = () => {
  return (
    <>
      <NavBar
        avatarImg={`${process.env.REACT_APP_API_URL}/images/Mohan-muruge.jpg`}
        userName={"User"}
      />
      <Divider />
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
      {
        path: "/upload",
        element: <UploadPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
