import '../Menu/Menu.css'
// import { Link } from 'react-router-dom'

function Menu() {
    return (
        <>
            <nav className='nav-bg flex-column'>
                
                <div>
                    {/* <img className='logo-menu' src="../src/imgs/logo-birdy-branco.png" alt="Logo Birdy" /> */}
                    <div>
                        <p>Dashboard</p>
                    </div>

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
