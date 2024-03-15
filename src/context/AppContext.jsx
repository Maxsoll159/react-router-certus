import { createContext, useEffect } from "react";
import { validateToken } from "../actions/api.login";
import { Navigate, useNavigate } from "react-router-dom";

export const UserContext = createContext()


export const AppContext = ({ children }) => {
    const navigation = useNavigate()
    const token = localStorage.getItem("token")

    useEffect(() => {
        validateToken(token).then(res => {
            if (res.statusCode) {
                navigation("/auth")
            }
        })
    }, [token])

    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}