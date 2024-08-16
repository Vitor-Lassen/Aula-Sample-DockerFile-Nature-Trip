import { useEffect, useState } from 'react'
import Menu from '../../componentes/Menu/Menu'
import '../Dashboard/Dashboard.css'
import contaDados from '../../util/contaDados'
import CardDestino from '../../componentes/CardDestino/CardDestino'

function Dashboard() {
    const [contUsuarios, setContUsuarios] = useState(0)
    const [contDestinos, setContDestinos] = useState(0)
    const [destinos, setDestinos] = useState([])

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

    return (
        <>
            <div className='flex-row'>
                <Menu></Menu>
                <div className='flex-column container-bg'>
                    <div className='box-dashboard'>
                        <h1>Dashboard</h1>

                        <div className='flex-row'>
                            <h5
                                className='cards'>
                                <div className='flex-row  justify-content-between'>
                                    <span className='num-card'>{contUsuarios}</span>
                                    <img className='icon-card' src="../src/imgs/birdy-icon.png" alt="Logo Birdy" />
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

                        <div>
                            <h1>Locais</h1>
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
            </div>
        </>
    )
}

export default Dashboard
