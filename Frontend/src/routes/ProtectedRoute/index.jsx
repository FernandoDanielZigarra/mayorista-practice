import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
/* import { jwtDecode } from "jwt-decode"; */

const ProtectedRoute = ({ component: Component }) => {
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
    navigate('/admin', { replace: true })
  }, [])

  return isTokenValid ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;