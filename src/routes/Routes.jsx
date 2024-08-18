import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Dashboard from '../pages/Dashboard/Dashboard'
import CadastroUsuario from '../pages/CadastroUsuario/CadastroUsuario'
import CadastroDestino from '../pages/CadastroDestino/CadastroDestino'
import ListaDestinos from '../pages/ListaDestinos/ListaDestinos'
import PerfilUsuario from '../pages/PerfilUsuario/PerfilUsuario'
import AlterarDestino from '../pages/AlterarDestino/AlterarDestino'
import TemplatePrivateRoute from '../templates/TemplatePrivateRoute'
import { AuthProvider } from '../contexts/auth'

function AppRoutes() {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/cadastro-usuario' element={<CadastroUsuario />} />
                        <Route path='/dashboard' element={<Dashboard />} />                        

                        <Route path='/' element={<TemplatePrivateRoute />}>
                            {/* <Route path='/dashboard' element={<Dashboard />} /> */}
                            <Route path='/cadastro-local' element={<CadastroDestino />} />
                            <Route path='/locais' element={<ListaDestinos />} />
                            <Route path='/perfil-usuario' element={<PerfilUsuario />} />
                            <Route path='/alterar-local/:id' element={<AlterarDestino />} />
                        </Route>
                    </Routes>
                </Router>
            </AuthProvider>
        </>
    )
}

export default AppRoutes
