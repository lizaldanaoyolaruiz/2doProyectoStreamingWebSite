const UsuariosData = [
    {
        email: "admin@admin.com",
        password: "12345678",
        rol: "Admin"
    },
    {
        email: "user@user.com",
        password: "123456789",
        rol: "User"

    }
]

function SubirUsuarios (){
    const UsuarioActual = localStorage.getItem("users")
    if(!UsuarioActual){
        localStorage.setItem("users", JSON.stringify(UsuariosData))
    }
    return
}

export{
    SubirUsuarios
}