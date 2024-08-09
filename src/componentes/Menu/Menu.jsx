import '../Menu/Menu.css'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <>
            <nav className='nav-bg flex-column'>                
                <div>                    
                    <Link to='/dashboard'>
                        <p>Dashboard</p>
                    </Link>

                    <div>
                        <p>Locais</p>
                    </div>

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
