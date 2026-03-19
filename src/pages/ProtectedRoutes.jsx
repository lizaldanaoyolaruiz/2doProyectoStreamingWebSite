import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

function ProtectedRoutes (){
    const navigate = useNavigate()
    useEffect(() => {
        function CheckAuth (){
        const userAuth = JSON.parse(localStorage.getItem("auth"))
        if(!userAuth || !userAuth.auth){
            navigate("/login")
            alert("Debes Iniciar Sesion")
            return
        }
    }
    } ,[]
    )
   
    
    return <Outlet/>
}

export {
    ProtectedRoutes
}