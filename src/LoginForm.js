import './LoginForm.css'
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';


function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    async function handleLogin() {

        try {
            const response = await fetch(`http://localhost:8000/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            if (response.ok) {
                const data = await response.json()
                console.log(data)
            }
        } catch (error) {
            console.log("handleLogin error : ", error)
        }
    }

    function handleSignup() {
        navigate('/signup')
    }

    return (
        <form className="login-form">
            <label>
                Email
                <input type="email"/>
            </label>
            <br/>
            <label>
                Password
                <input type="password"/>
            </label>
            <br/>
            <button className="login-button" onClick={handleLogin}>
                Login
            </button>
            or
            <button className="login-button" onClick={handleSignup}>
                Signup
            </button>
        </form>
    )
}

export default LoginForm