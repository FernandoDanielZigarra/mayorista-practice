import FormProduct from "../components/FormProduct";
import Admin from "../pages/Admin";
import ProtectedRoute from "./ProtectedRoute";

export const routesPrivate = [
    {
        path: "/admin",
        element: <ProtectedRoute component={Admin} />
    },
    {
        path: "/admin/product/:id",
        element: <ProtectedRoute component={FormProduct} />
    }
]