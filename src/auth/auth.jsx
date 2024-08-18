import { Navigate } from 'react-router-dom'

function PrivateRoute({ element: Component, ...rest }) {
  const isAuthenticated = !!localStorage.getItem('usuarioId')

  return isAuthenticated ? Component : <Navigate to="/login" />
}

export default PrivateRoute
