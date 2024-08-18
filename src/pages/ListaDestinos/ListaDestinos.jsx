import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../../componentes/Menu/Menu'
import '../ListaDestinos/ListaDestinos.css'

function ListaDestinos() {
    const [destinos, setDestinos] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const usuarioId = localStorage.getItem('usuarioId')

        const carregarDestinos = async () => {
            try {
                const response = await fetch(`http://localhost:3000/destinos?usuarioId=${usuarioId}`)
                if (response.ok) {
                    const data = await response.json()
                    setDestinos(data);
                } else {
                    alert('Erro ao carregar os destinos.')
                }
            } catch (error) {
                alert('Erro ao carregar os destinos.')
            }
        }

        if (usuarioId) {
            carregarDestinos()
        }
    }, [])

    const handleAlterar = (id) => {
        navigate(`/alterar-local/${id}`)
    }

    const handleExcluir = async (id) => {
        const confirmar = window.confirm("Tem certeza que deseja excluir este local?")

        if (confirmar) {
            try {
                const response = await fetch(`http://localhost:3000/destinos/${id}`, {
                    method: 'DELETE',
                })

                if (response.ok) {
                    setDestinos(destinos.filter(destino => destino.id !== id));
                    alert("Local excluído com sucesso!")
                } else {
                    alert("Erro ao excluir o local.")
                }
            } catch (error) {
                alert("Erro ao excluir o local.")
            }
        }
    }

    return (
        <>
            <Menu></Menu>
            <div className="destinos-container">
                <h2 className="titulo">Meus Locais</h2>
                {destinos.length > 0 ? (
                    <table className="tabela-destinos">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Cidade</th>
                                <th>Estado</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {destinos.map((destino) => (
                                <tr key={destino.id}>
                                    <td>{destino.nome}</td>
                                    <td>{destino.cidade}</td>
                                    <td>{destino.estado}</td>
                                    <td className='acoes-coluna'>
                                        <img
                                            src="../src/imgs/alterar-icon.png"
                                            alt="Alterar"
                                            className="icon-alterar"
                                            onClick={() => handleAlterar(destino.id)}
                                        />
                                        <img
                                            src="../src/imgs/excluir-icon.png"
                                            alt="Excluir"
                                            className="icon-excluir"
                                            onClick={() => handleExcluir(destino.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Nenhum local cadastrado.</p>
                )}
            </div>
        </>
    )
}

export default ListaDestinos
