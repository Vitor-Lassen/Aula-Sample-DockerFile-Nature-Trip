import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Dashboard/Dashboard.css'
import Menu from '../../componentes/Menu/Menu'
import contaDados from '../../util/contaDados'
import CardDestino from '../../componentes/CardDestino/CardDestino'
import Mapa from '../../componentes/Mapa/Mapa'

function Dashboard() {
    const [contUsuarios, setContUsuarios] = useState(0)
    const [contDestinos, setContDestinos] = useState(0)
    const [destinos, setDestinos] = useState([]) 
    const [selectedDestino, setSelectedDestino] = useState(null) 
    const navigate = useNavigate()

        useEffect(() => {
        async function fetchData() {
            const { contUsuarios, contDestinos } = await contaDados()
            setContUsuarios(contUsuarios)
            setContDestinos(contDestinos)

            const response = await fetch('http://localhost:3000/destinos')
            const data = await response.json()
            setDestinos(data)
        }

        fetchData()
    }, [])

    const handleNovoLocal = () => {
        navigate('/cadastro-local')
    }      

    const handleMouseEnter = (destino) => {
        setSelectedDestino(destino);
    }

    const handleMouseLeave = () => {
        setSelectedDestino(null);
    }

    return (
        <>
            <div className='flex-row'>
                <Menu></Menu>
                <Mapa selectedDestino={selectedDestino}/>
                <div className='flex-column container-bg'>
                    <div className='position-fixed dashboard-container'>
                        <div className='d-flex align-items-baseline'>
                            <h2 className='titulo'>Dashboard</h2>
                            <button onClick={handleNovoLocal} className='btn-style f-13'>Novo Local</button>
                        </div>

                        <div className='flex-row'>
                            <h5
                                className='card'>
                                <div className='flex-row  justify-content-between'>
                                    <span className='num-card'>{contUsuarios}</span>
                                    <img className='icon-card' src="../src/imgs/user-icon.png" alt="Icon Usuário" />
                                </div>
                                Usuários
                            </h5>
                            <h5
                                className='card'>
                                <div className='flex-row  justify-content-between'>
                                    <span className='num-card'>{contDestinos}</span>
                                    <img className='icon-card' src="../src/imgs/local-icon.png" alt="Icone Localização" />
                                </div>
                                Locais
                            </h5>
                        </div>                        
                    </div>

                    <div className='lista-locais'>
                        <div>
                            {destinos.map(destino => (
                                <CardDestino
                                    key={destino.id}
                                    nome={destino.nome}
                                    descricao={destino.descricao}
                                    cidade={destino.cidade}
                                    estado={destino.estado}                                    
                                    onMouseEnter={() => handleMouseEnter(destino)}
                                    onMouseLeave={handleMouseLeave}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
