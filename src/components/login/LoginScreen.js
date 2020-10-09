import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {
// el history viene en las props por el react-router-dom --> se puede ver en la consola en componentes
   
const {dispatch} = useContext(AuthContext)

const handleLogin = ()=>{
        // history.push('/') // te manda a la pagina "/"
        //history.replace('/') // reemplaza en el historial la pagina "/login" por "/"
       const lastPath = localStorage.getItem('lastPath') || '/'
        dispatch({
            type: types.login, 
            payload: {name: 'Martin'}
            })

            history.replace(lastPath)  


    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>
            <button className="btn btn-primary"
            onClick={handleLogin}>Login</button>
        </div>
    )
}
