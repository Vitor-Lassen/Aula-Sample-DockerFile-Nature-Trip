import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {        
        const autenticado = localStorage.getItem('autenticado') === 'true'
        setIsAuthenticated(autenticado)
    }, [])

    const signIn = () => {        
        setIsAuthenticated(true)
        localStorage.setItem('autenticado', 'true')
    }

    const signOut = () => {        
        setIsAuthenticated(false)
        localStorage.removeItem('autenticado')
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}