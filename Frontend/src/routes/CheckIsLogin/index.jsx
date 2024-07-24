import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function CheckIsLogin({ component: Component }) {
    const [isTokenValid, setIsTokenValid] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (!token) {
            setIsTokenValid(false)
            return
        }
        /* const response = jwtDecode(token);
        console.log(response) */
        setIsTokenValid(true)
        navigate('/login', { replace: true })
    }, [])

    return isTokenValid ? <Navigate to="/admin" /> : <Component />;
}

export default CheckIsLogin;
