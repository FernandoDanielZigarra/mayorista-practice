import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";
import {Navigate} from "react-router-dom";
import ResultSearch from "../pages/ResultSearch";

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
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/product/:id",
        element: <ProductDetail />,
    },
    {
        path:"/search",
        element: <ResultSearch />
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    }
]