import '../Login/Login.css'
// import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function Login() {
   
    
    return (
        <>
            <div className='flex-row login-bg'>                
                <div className='form-container-login flex-col'>
                    <h2>Login</h2>
                    <form className='input-login flex-col' action="">
                        <input className='input-area' type="text" placeholder='E-mail' />
                        <input className='input-area' type="text" placeholder='Senha'/>
                        <button>Entrar</button>
                    </form>
                    <div className='flex-row f-12'>
                        <p className='space'>Ainda não tem cadastro?</p>
                        <Link className='texto-link' to='/cadastro-usuario'>
                            <p>Cadastrar</p>
                        </Link>
                    </div>
                    
                                      
                </div>

            </div>
        </>
    )
}

export default Login
