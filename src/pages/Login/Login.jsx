import '../Login/Login.css'

function Login() {
    return (
        <>
            <div className='flex-row login-bg'>
                <div className='form-container flex-column'>
                    <h2>Login</h2>
                    <form className='input-login flex-column' action="">
                        <input className='input-area' type="text" placeholder='E-mail' />
                        <input className='input-area' type="text" placeholder='Senha'/>
                        <button>Entrar</button>
                    </form>
                    <p>Cadastrar</p>                   
                </div>

            </div>
        </>
    )
}

export default Login
