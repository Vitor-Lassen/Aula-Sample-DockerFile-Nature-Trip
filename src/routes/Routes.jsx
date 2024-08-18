import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Dashboard from '../pages/Dashboard/Dashboard'
import CadastroUsuario from '../pages/CadastroUsuario/CadastroUsuario'
import CadastroDestino from '../pages/CadastroDestino/CadastroDestino'
import ListaDestinos from '../pages/ListaDestinos/ListaDestinos'
import PerfilUsuario from '../pages/PerfilUsuario/PerfilUsuario'
import AlterarDestino from '../pages/AlterarDestino/AlterarDestino'
import PrivateRoute from '../auth/auth'

function AppRoutes() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/cadastro-usuario' element={<CadastroUsuario />} />

                    <Route path='/dashboard' element={<PrivateRoute element={<Dashboard />} />} />
                    <Route path='/cadastro-local' element={<PrivateRoute element={<CadastroDestino />} />} />
                    <Route path='/locais' element={<PrivateRoute element={<ListaDestinos />} />} />
                    <Route path='/perfil-usuario' element={<PrivateRoute element={<PerfilUsuario />} />} />
                    <Route path='/alterar-local/:id' element={<PrivateRoute element={<AlterarDestino />} />} />
                </Routes>
            </Router>
        </>
    )
}

export default AppRoutes
