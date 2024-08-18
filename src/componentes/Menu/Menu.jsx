import '../Menu/Menu.css'
import { Link, useNavigate } from 'react-router-dom'

function Menu() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('usuarioNome')
        localStorage.removeItem('usuarioId')

        navigate('/login')
    }

    return (
        <>
            <nav className='nav-bg'>
                <div>
                    <img className='logo-img' src="../src/imgs/birdy-icon.png" alt="Logo Birdy" />
                </div>
                <div>
                    <Link className='decor-none' to='/dashboard'>
                        <p className='text-menu'>Dashboard</p>
                    </Link>

                    <Link className='decor-none' to='/locais'>
                        <p>Locais Cadastrados</p>
                    </Link>

                    <Link className='decor-none' to='/perfil-usuario'>
                        <p>Perfil do Usuário</p>
                    </Link>
                </div>

                <div>
                    <p className='decor-none' onClick={handleLogout}>Sair</p>
                </div>
            </nav>
        </>
    )
}

export default Menu
