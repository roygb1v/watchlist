import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  background: lightgray;
  min-width: 40rem;
  min-height: 20rem;
  padding: 1rem;
  margin: auto;
`

import {CreationForm} from "./components/CreationForm/CreationForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    {
      path: "/home",
      element: <CreationForm />
    },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
