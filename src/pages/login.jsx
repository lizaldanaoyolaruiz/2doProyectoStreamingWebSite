import { useEffect } from "react"
import { SubirUsuarios } from "../data/user"
import { useNavigate } from "react-router"

function LoginPage(){
    const navigate = useNavigate()
    function handleLogin (e){ 
        e.preventDefault() 
        const form = e.target 
        const formData = new FormData(form) 
        const data = Object.fromEntries(formData) 
        console.log(data) 
        const dataFromLS = JSON.parse(localStorage.getItem("users")) 
        const userFound = dataFromLS.find(user => user.email === data.email)
        if (!userFound){ 
            alert("Usuario No Encontrado") 
            delete userFound.password
            localStorage.setItem("auth",JSON.stringify({
            auth: true,
            ...userFound
            }))
            return 
        } 
        const passwordMatch = data.password === userFound.password 
        if(!passwordMatch){ 
            alert("Contraseña Incorrecta") 
            return 
        } 
        alert("Usuario Logueado")
        delete userFound.password
        localStorage.setItem("auth",JSON.stringify({
            auth: true,
            ...userFound
        }))
        useNavigate("/admin")     
    }
      

    useEffect(()=>{
        SubirUsuarios()
    },[])

    return(
        <>
       <div> 
        <h1>Iniciar Sesion</h1> 
        <form onSubmit={(e)=>{handleLogin(e)}}> 
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
       </div>
        </>
    )
}
export {
    LoginPage
}