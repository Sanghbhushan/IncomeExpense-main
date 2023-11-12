import {createContext, useContext, useState} from "react";
import { useNavigate } from "react-router-dom";

const  AuthContext = createContext(null)

export const AuthProvider =({children})=>{
    const navigate = useNavigate()
    
    const [user, setUser ]=useState(null)

    const login =(email, password)=>{
        setUser(email)
        
    }
    const logout =()=>{
        setUser(null)
        localStorage.removeItem("user")
        navigate('/')
        
    }
    const register =()=>{
        setUser(null)
    }


    return (
    <AuthContext.Provider value={{user, login, logout, register}}>
     {children}
    </AuthContext.Provider>
    )
}


export const useAuth =()=>{
    return useContext(AuthContext)
}