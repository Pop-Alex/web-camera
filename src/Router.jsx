import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import App from "./App";
import Location from "./Location";
import Explore from "./page/Explore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/location",
    element: <Location />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
]);
export default router;
