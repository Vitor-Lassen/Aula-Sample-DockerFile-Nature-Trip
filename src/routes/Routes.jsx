import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Login from '../pages/Login/Login'
// import { Dashboard } from '../pages/Dashboard/Dashboard'
import CadastroUsuario from '../pages/CadastroUsuario/CadastroUsuario'
import CadastroDestino from '../pages/CadastroDestino/CadastroDestino'
// import ListaDestino from '../pages/ListaDestino/ListaDestino'
// import PerfilUsuario from '../pages/PerfilUsuario/PerfilUsuario'
// import TemplatePrivado from './TemplatePrivado'

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/cadastro-usuario' element={<CadastroUsuario/>}/>
                <Route path='/cadastro-destino' element={<CadastroDestino/>}/>
                
                {/* <Route path='/' element={<TemplatePrivado/>}> */}
                    {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
                    {/* <Route path='/cadastro-destino' element={<CadastroDestino/>}/> */}
                    {/* <Route path='/lista-destino' element={<ListaDestino/>}/> */}
                    {/* <Route path='/perfil-usuario' element={<PerfilUsuario/>}/> */}
                {/* </Route>                */}
            </Routes>
        </Router>


    )
}

export default AppRoutes
