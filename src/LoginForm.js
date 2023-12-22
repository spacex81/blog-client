import './LoginForm.css'

function LoginForm() {

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
            <button className="login-button">
                Login
            </button>
        </form>
    )
}

export default LoginForm