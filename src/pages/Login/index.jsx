import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"

export function Login() {
    const navigate = useNavigate()

    function verifyToken() {
        const token = 'blablabla'
        if (token) navigate('/todos')
    }

    useEffect(() => {
        verifyToken()
    }, [])

    return (
        <h1>Login</h1>
    )
}