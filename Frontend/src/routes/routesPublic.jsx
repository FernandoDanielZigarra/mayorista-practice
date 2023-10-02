import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Products from "../pages/Products";

export const routesPublic = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/products",
        element: <Products />,
    },
    {
        path: "/contact",
        element: <Contact />,
    }
]