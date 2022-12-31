import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducer/rootReducer';
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
  {
    path: "dashboard",
    element: (<Dashboard/>),
  },
]);

const store = createStore(rootReducer)

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  
);

