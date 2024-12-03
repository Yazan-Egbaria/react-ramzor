import { createBrowserRouter } from "react-router-dom";
import RootElement from "../pages/RootElement";
import Landing from "../pages/Landing";
import Weather from "../pages/Weather";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/weather",
        element: <Weather />,
      },
    ],
  },
]);
