import React , {useContext,useEffect} from 'react'
import {useNavigate}from "react-router-dom"

import MyContext from "../../../../context/MyContext"


const LoginCheck = () => {
    const navigate = useNavigate()
    const context = useContext(MyContext)
    const {auth} = context;

    useEffect(()=>{
if(auth) {
    navigate("/account")
} else {
    navigate("/login")
}
    }, [auth,navigate])
    return (
        <div>
            
        </div>
    )
}

export default LoginCheck
