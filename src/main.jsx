import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MyFlix from "./pages/MyFlix/MyFlix.jsx";
import NotFound from "./pages/MyFlix/components/404/NotFound.jsx";
import Assistir from "./pages/Assistir/Assistir.jsx";
import Pesquisar from "./pages/Pesquisar/Pesquisar.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import { Authenticator } from "./contexts/login.jsx";
import { PrivateRoute } from "./PrivateRoutes.jsx";
import { Likes } from "./contexts/likes.jsx";
import { Movies } from "./contexts/allMovies.jsx";
import Favoritos from "./pages/favoritos/favoritos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <MyFlix />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },

  {
    path: "/favoritos",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <Favoritos />,
      },
    ],
  },
  {
    path: "/assistir",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <Assistir />,
      },
    ],
  },
  {
    path: "/Pesquisar",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <Pesquisar />,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authenticator>
      <Likes>
        <Movies>
          <RouterProvider router={router} />
        </Movies>
      </Likes>
    </Authenticator>
  </StrictMode>
);
