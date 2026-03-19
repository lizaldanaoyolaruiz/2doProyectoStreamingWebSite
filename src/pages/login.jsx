import { useEffect } from "react"
import { SubirUsuarios } from "../data/user"

function LoginPage(){

    function handleLogin (e){ 
        e.preventDefault() 
        const form = e.target 
        const formData = new FormData(form) 
        const data = Object.fromEntries(formData) 
        console.log(data) 
        const dataFromLS = JSON.parse(localStorage.getItem("users")) 
        const userFound = dataFromLS.find(user => user.email === data.email)
    }

  

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