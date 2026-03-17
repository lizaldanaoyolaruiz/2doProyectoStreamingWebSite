import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

function ProtectedRoutes(){
    const navigate = useNavigate();
    useEffect(() => {
        function checkAuth(){
            const userAuth = JSON.parse(localStorage.getItem('auth'));
            if (!userAuth || !userAuth.auth){
                navigate('/login');
                toast.error('Debe iniciar sesion');
                return;
            }
        }
    }, [])
    
    return <Outlet/>
}

export default ProtectedRoutes;