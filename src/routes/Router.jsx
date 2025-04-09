import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import B2Bpage from "@/pages/B2Bpage/B2Bpage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/b2b-sass",
        element: <B2Bpage />,
      },
    ],
  },
]);
