import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Menu from '../../componentes/Menu/Menu'

function PerfilUsuario() {
    const { register, handleSubmit, setValue } = useForm()
    const [usuario, setUsuario] = useState({ nome: '', id: '' })
    const navigate = useNavigate()

    useEffect(() => {
        const usuarioNome = localStorage.getItem('usuarioNome')
        const usuarioId = localStorage.getItem('usuarioId')
        setUsuario({ nome: usuarioNome, id: usuarioId })

        if (usuarioId) {
            carregarUsuario(usuarioId)
        }
    }, [])

    const carregarUsuario = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/usuarios/${id}`)
            if (response.ok) {
                const data = await response.json()
                setUsuario(data)

                for (const key in data) {
                    setValue(key, data[key])
                }
            } else {
                alert('Erro ao carregar os dados do usuário.')
            }
        } catch (error) {
            alert('Erro ao carregar os dados do usuário.')
        }
    }

    const atualizarUsuario = async (data) => {
        try {
            const response = await fetch(`http://localhost:3000/usuarios/${usuario.id}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (response.ok) {
                alert('Dados atualizados com sucesso!')
                navigate('/dashboard')
            } else {
                alert('Erro ao atualizar os dados do usuário.')
            }
        } catch (error) {
            alert('Erro ao atualizar os dados do usuário.')
        }
    }

    const handleDashboard = () => {
        navigate('/dashboard')
    }

    return (
        <>
            <div className='flex-row'>
                <Menu></Menu>
                <div className="container-bg">
                    <h2 className='titulo'>Perfil do Usuário</h2>
                    {usuario && (
                        <div className='flex-row'>
                            <p><strong>ID:</strong> {usuario.id}</p>
                            <p><strong>Nome:</strong> {usuario.nome}</p>
                        </div>
                    )}
                    <div>
                        <form onSubmit={handleSubmit(atualizarUsuario)}>
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
                                <div className='col-4'>
                                    <select className='input-area w-100' {...register('sexo')}>
                                        <option value="">Sexo</option>
                                        <option value="feminino">Feminino</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="na">Prefiro não informar</option>
                                    </select>
                                </div>
                                <div className='col-4'>
                                    <input
                                        className='input-area w-100'
                                        type="text"
                                        placeholder='CPF'
                                        {...register('cpf', { required: 'Campo Obrigatório' })}
                                    />
                                </div>
                                <div className='col-4'>
                                    <input
                                        className='input-area w-100'
                                        type="date"
                                        placeholder='Data de Nascimento'
                                        {...register('data_nasc', { required: 'Campo Obrigatório' })}
                                    />
                                </div>
                            </div>

                            <div className='row mt-4'>
                                <div className='col-8'>
                                    <input
                                        className='input-area w-100'
                                        type="text" placeholder='E-mail'
                                        {...register('email', { required: 'Campo Obrigatório' })}
                                    />
                                </div>
                                <div className='col-4'>
                                    <input
                                        className='input-area w-100'
                                        type="text"
                                        placeholder='Senha'
                                        {...register('senha', { required: 'Campo Obrigatório' })}
                                    />
                                </div>
                            </div>

                            <div className='row mt-4'>
                                <div className='col-3'>
                                    <input
                                        className='input-area w-100'
                                        type="text"
                                        placeholder='CEP'
                                        {...register('cep', { required: 'Campo Obrigatório' })}
                                    />
                                </div>
                                <div className='col-7'>
                                    <input
                                        className='input-area w-100'
                                        type="text"
                                        placeholder='Endereço'
                                        {...register('endereco', { required: 'Campo Obrigatório' })}
                                    />
                                </div>
                                <div className='col-2'>
                                    <input
                                        className='input-area w-100'
                                        type="text"
                                        placeholder='Número'
                                        {...register('numero', { required: 'Campo Obrigatório' })}
                                    />
                                </div>
                            </div>

                            <div className='row mt-4'>
                                <div className='col-4'>
                                    <input
                                        className='input-area w-100'
                                        type="text"
                                        placeholder='Bairro'
                                        {...register('bairro', { required: 'Campo Obrigatório' })}
                                    />
                                </div>
                                <div className='col-4'>
                                    <input
                                        className='input-area w-100'
                                        type="text"
                                        placeholder='Cidade'
                                        {...register('cidade', { required: 'Campo Obrigatório' })}
                                    />
                                </div>
                                <div className='col-4'>
                                    <input
                                        className='input-area w-100'
                                        type="text"
                                        placeholder='Estado'
                                        {...register('estado', { required: 'Campo Obrigatório' })}
                                    />
                                </div>
                            </div>

                            <div className='row gap-5'>
                                <button onClick={handleDashboard} className='mt-5 btn-white btn-style w-50 col' type='submit'>Cancelar</button>
                                <button className='mt-5 btn-yellow btn-style w-50 col' type='submit'>Atualizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PerfilUsuario;
