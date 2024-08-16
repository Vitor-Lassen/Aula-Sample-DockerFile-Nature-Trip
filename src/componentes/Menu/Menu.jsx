import '../Menu/Menu.css'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <>
            <nav className='nav-bg'>                
                <div>                    
                    <Link className='decor-none' to='/dashboard'>
                        <p>Dashboard</p>
                    </Link>

                    <Link className='decor-none' to='/locais'>
                        <p>Locais</p>
                    </Link>

                    <div>
                        <p>Perfil do Usuário</p>
                    </div>
                </div>

                <div>
                    <p>Sair</p>
                </div>
            </nav>
        </>
    )
}

export default Menu
