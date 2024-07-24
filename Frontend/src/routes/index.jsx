import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { routesPublic } from "./routesPublic";
import { routesPrivate } from "./routesPrivate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...routesPublic,...routesPrivate]
  }
]);

export const ProviderRouter = () => <RouterProvider router={router} />