import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h2>Error</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <h2>About</h2>,
      },
      {
        path: "/agenda",
        element: <h2>Agenda</h2>,
      },
      {
        path: "/speakers",
        element: <h2>Speakers</h2>,
      },
      {
        path: "/exhibitors",
        element: <h2>Exhibitors</h2>,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
