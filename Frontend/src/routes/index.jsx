import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { routesPublic } from "./routesPublic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...routesPublic]
  }
]);

export const ProviderRouter = () => <RouterProvider router={router} />