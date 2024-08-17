import { useEffect, useState } from 'react'
import Menu from '../../componentes/Menu/Menu'
import '../Dashboard/Dashboard.css'
import contaDados from '../../util/contaDados'
import CardDestino from '../../componentes/CardDestino/CardDestino'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [contUsuarios, setContUsuarios] = useState(0)
    const [contDestinos, setContDestinos] = useState(0)
    const [destinos, setDestinos] = useState([])
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
        navigate('/cadastro-destino')
    }
    
    return (
        <>
            <div className='flex-row'>
                <Menu></Menu>
                <div className='flex-column container-bg'>
                    <div className='position-fixed dashboard-container'>
                        <div className='d-flex align-items-baseline'>
                            <h2 className='titulo'>Dashboard</h2>
                            <button onClick={handleNovoLocal} className='btn-style f-13'>Novo Local</button>
                        </div>
                        
                        <div className='flex-row'>
                            <h5
                                className='cards'>
                                <div className='flex-row  justify-content-between'>
                                    <span className='num-card'>{contUsuarios}</span>
                                    <img className='icon-card' src="../src/imgs/user-icon.png" alt="Icon Usuário" />
                                </div>
                                Usuários
                            </h5>
                            <h5
                                className='cards'>
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
