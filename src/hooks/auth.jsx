/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }){
    
    const [data, setData] = useState({})

    async function signIn({ email, password }){    
        try{
            const response = await api.post("sessions", { email, password }, { withCredentials: true })
            const { user } = response.data

            localStorage.setItem("@fexplorer: user", JSON.stringify(user))

            setData({ user })

        } catch(error) {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível iniciar a sessão.")
            }
        }
    }
    function signOut(){
        localStorage.removeItem("@fexplorer: user")

        setData({})
    }


    useEffect(() => {
        const user = localStorage.getItem("@fexplorer: user")
            
        if(user){
            setData({ user: JSON.parse(user)})
        }
    }, [])
    return(
        <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
            { children }
        </AuthContext.Provider>
    )
}
function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }