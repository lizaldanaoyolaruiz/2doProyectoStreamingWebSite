import { useEffect } from "react"
import { SubirUsuarios } from "../data/user"

function LoginPage(){
    
  

    useEffect(()=>{
        SubirUsuarios()
    },[])
    return(
        <>
        <form action="">
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                minLength={4} 
                maxLength={100} 
            />
            <input 
                type="password" 
                name="password" 
                placeholder="Contraseña" 
                minLength={8} 
                maxLength={100}
            />
            <button>Iniciar Sesion</button>
        </form>
        </>
    )
}
export {
    LoginPage
}