import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import buscaCep from '../../util/buscaCep'
import buscaCoordenadas from '../../util/buscaCoordenadas'
import Menu from '../../componentes/Menu/Menu'

function AlterarDestino() {
    const { register, handleSubmit, setValue } = useForm()
    const [cep, setCep] = useState('')
    const [usuario, setUsuario] = useState({ nome: '', id: '' })
    const [destino, setDestino] = useState(null)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const usuarioNome = localStorage.getItem('usuarioNome')
        const usuarioId = localStorage.getItem('usuarioId')
        setUsuario({ nome: usuarioNome, id: usuarioId })

        const carregarDestino = async (id) => {
            try {
                const response = await fetch(`http://localhost:3000/destinos/${id}`)
                if (response.ok) {
                    const data = await response.json()
                    setDestino(data)
                    setCep(data.cep || '')

                    for (const key in data) {
                        setValue(key, data[key])
                    }
                } else {
                    alert('Erro ao carregar os dados do destino.')
                }
            } catch (error) {
                alert('Erro ao carregar os dados do destino.')
            }
        }

        if (id) {
            carregarDestino(id)
        }
    }, [id, setValue])

    const atualizarDestino = async (data) => {
        try {
            const destinoData = { ...data, usuarioId: usuario.id }
            const response = await fetch(`http://localhost:3000/destinos/${id}`, {
                method: 'PUT',
                body: JSON.stringify(destinoData),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (response.ok) {
                alert('Dados do destino atualizados com sucesso!')
                navigate('/locais')
            } else {
                alert('Erro ao atualizar os dados do destino.')
            }
        } catch (error) {
            alert('Erro ao atualizar os dados do destino.')
        }
    }

    const onCepChange = async (e) => {
        const cepValue = e.target.value.replace(/\D/g, '')
        setCep(cepValue)
        if (cepValue.length === 8) {
            await buscaCep(cepValue, setValue)
        }
    }

    const onCoordenadasChange = async (e) => {
        const coordenadasValue = e.target.value
        if (coordenadasValue) {
            await buscaCoordenadas(coordenadasValue, setValue)
        }
    }

    return (
        <>
            <div className='flex-row'>
                <Menu />
                <div className="container-bg">
                    <h2 className='titulo'>Alterar Local</h2>
                    {destino && (
                        <div>
                            <form onSubmit={handleSubmit(atualizarDestino)}>
                                <div className='row mt-4'>
                                    <div className='col-12'>
                                        <span>ID: {destino.id}</span>
                                    </div>
                                </div>

                                <div className='row mt-4'>
                                    <div className='col-12'>
                                        <input
                                            className='input-area w-100'
                                            type="text"
                                            placeholder='Nome'
                                            {...register('nome', { required: 'Campo Obrigatório' })}
                                        />
                                    </div>
                                </div>

                                <div className='row mt-4'>
                                    <div className='col-12'>
                                        <textarea
                                            className='input-area w-100 descricao-local'
                                            placeholder='Descrição do local'
                                            {...register('descricao', { required: 'Adicione uma descrição do local' })}
                                        />
                                    </div>
                                </div>

                                <div className='row mt-4'>
                                    <div className='col-4'>
                                        <input
                                            className='input-area w-100'
                                            type="text"
                                            placeholder='Coordenadas Geográficas'
                                            {...register('coordenadas', { required: 'Informe a latitude e longitude do local.' })}
                                            onBlur={onCoordenadasChange}
                                        />
                                    </div>
                                    <div className='col-2'>
                                        <input
                                            className='input-area w-100'
                                            type="text"
                                            placeholder='CEP'
                                            {...register('cep')}
                                            value={cep}
                                            onChange={onCepChange}
                                        />
                                    </div>
                                    <div className='col-2'>
                                        <input
                                            className='input-area w-100'
                                            type="text"
                                            placeholder='Cidade'
                                            {...register('cidade', { required: 'Campo Obrigatório' })}
                                        />
                                    </div>
                                    <div className='col-2'>
                                        <input
                                            className='input-area w-100'
                                            type="text"
                                            placeholder='Estado'
                                            {...register('estado', { required: 'Campo Obrigatório' })}
                                        />
                                    </div>
                                    <div className='col-2'>
                                        <input
                                            className='input-area w-100'
                                            type="text"
                                            placeholder='País'
                                            {...register('pais', { required: 'Campo Obrigatório' })}
                                        />
                                    </div>
                                </div>

                                <button className='btn-style w-100 mt-5' type='submit'>Atualizar</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default AlterarDestino
