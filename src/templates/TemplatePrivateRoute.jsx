import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/auth'

function TemplatePrivateRoute() {
    const { isAuthenticated } = useAuth()

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default TemplatePrivateRoute