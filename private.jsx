import { Navigate } from 'react-router-dom';

function PrivateRoute({ element: Component, ...rest }) {
  const isAuthenticated = !!localStorage.getItem('usuarioId');
  
  return isAuthenticated ? Component : <Navigate to="/login" />;
}

export default PrivateRoute;




import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from '../pages/login/Login';
import CadastrarLocal from '../pages/cadastro-local/CadastroLocal';
import CadastrarUsuario from '../pages/cadastro-usuario/CadastroUsuario';
import ListarLocais from '../pages/listagem-locais/Locais';
import Dashboard from '../pages/dashboard/Dashboard';
import PerfilUsuario from '../pages/perfil/Perfil';
import Local from '../pages/local/Local';
import PrivateRoute from '../components/rotas-privadas/PrivateRoute';

function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastrarusuario' element={<CadastrarUsuario />} />
        <Route path='/cadastrarlocal' element={<PrivateRoute element={<CadastrarLocal />} />} />
        <Route path='/locais' element={<PrivateRoute element={<ListarLocais />} />} />
        <Route path='/dashboard' element={<PrivateRoute element={<Dashboard />} />} />
        <Route path='/perfil' element={<PrivateRoute element={<PerfilUsuario />} />} />
        <Route path='/local/:id' element={<PrivateRoute element={<Local />} />} />
      </Routes>
    </Router>
  );
}

export default RoutesComponent;