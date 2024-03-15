import { useState } from "react"
import { useForm } from "../../hooks/useForm"
import { apiAuth } from "../../actions/api.login"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigation = useNavigate()
    const {state, handleChangesInputs} = useForm({
        email: "",
        password: ""
    })

    const handleLogin = (e) =>{
        e.preventDefault()
        apiAuth(state).then((res)=>{
            if(res.statusCode){
                alert("Datos incorrectos")
            }else{
                localStorage.setItem("token", res.access_token)
                navigation("/dashboard/admin", {state: {logged: true}, replace: true})
            }
        })
    }

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label >Correo</label><br />
                <input onChange={handleChangesInputs} type="text" name="email" />
            </div>
            <div>

                <label>Contraseña</label><br />
                <input onChange={handleChangesInputs} type="password" name="password" />
            </div>
            <button>Ingresar</button>
        </form>
    )
}
