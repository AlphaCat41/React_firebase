import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
  },
  {
    path: "signin",
    element: (<Signin />),
  },
  {
    path: "signup",
    element: (<Signup />),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

