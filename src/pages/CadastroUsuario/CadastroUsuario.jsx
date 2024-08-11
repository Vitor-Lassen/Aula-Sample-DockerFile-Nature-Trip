import '../CadastroUsuario/CadastroUsuario.css'
import Menu from '../../componentes/Menu/Menu'
import { useForm } from 'react-hook-form'
import  { useState } from 'react'
import axios from 'axios'

function CadastroUsuario() {
    const { register, handleSubmit, setValue, formState } = useForm()
    const [cep, setCep] = useState('')

    const buscaEndereco = async (cep) => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            if (!response.data.erro) {
                setValue('endereco', response.data.logradouro)
                setValue('bairro', response.data.bairro)
                setValue('cidade', response.data.localidade)
                setValue('estado', response.data.uf)
            } else {
                alert('CEP não encontrado.')
            }            
        } catch (error) {
            console.error('Erro ao buscar endereço: ', error)            
        }
    }

    const onCepChange = (e) => {
        const cepValue = e.target.value.replace(/\D/g, '')
        setCep(cepValue)
        if (cepValue.length === 8) {
            buscaEndereco(cepValue)
        }
    }    

    async function addUser(data) {
        try {
            const response = await fetch('http://localhost:3000/usuarios', {
                method: 'post',
                body: JSON.stringify(data)
            })

            if (response.ok === false) {
                alert('Erro ao cadastrar usuario.')
            } else {
                alert('Cadastro efetuado com sucesso!')
            }

        } catch (error) {
            alert('Erro no cadastro do usuario.')
        }
    }

    return (
        <>
            <div className='flex-row'>
                <Menu></Menu>
                <div className="container-bg flex-col justify-content-center w-100">
                    <h2 className='titulo'>Cadastre-se</h2>
                    <div>
                        <form className='container' onSubmit={handleSubmit(addUser)}>
                            <div className='row'>
                                <div className='col-12'>
                                <span className='error-message'>{formState.errors?.nome?.message}</span><br/>
                                    <input className='input-area w-100' type="text" placeholder='Nome' {...register('nome', { required: 'Campo Obrigatório' })} />
                                    
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-4'>
                                    <span className='error-message'>{formState.errors?.sexo?.message}</span>
                                    <select className='input-area w-100' {...register('sexo')}>
                                        <option value=""></option>
                                        <option value="feminino">Feminino</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="na">Prefiro não informar</option>
                                    </select>
                                </div>
                                <div className='col-4'>
                                    <span className='error-message'>{formState.errors?.cpf?.message}</span>
                                    <input className='input-area w-100' type="text" placeholder='CPF' {...register('cpf', { required: 'Campo Obrigatório' })} />
                                </div>
                                <div className='col-4'>
                                    <span className='error-message'>{formState.errors?.data_nasc?.message}</span>
                                    <input className='input-area w-100' type="text" placeholder='Data de Nascimento' {...register('data_nasc', { required: 'Campo Obrigatório' })} />
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-8'>
                                    <span className='error-message'>{formState.errors?.email?.message}</span>
                                    <input className='input-area w-100' type="text" placeholder='E-mail' {...register('email', { required: 'Campo Obrigatório' })} />
                                </div>
                                <div className='col-4'>
                                    <span className='error-message'>{formState.errors?.senha?.message}</span>
                                    <input className='input-area w-100' type="text" placeholder='Senha' {...register('senha', { required: 'Campo Obrigatório' })} />
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-3'>
                                    <span className='error-message'>{formState.errors?.cep?.message}</span>
                                    <input className='input-area w-100' type="text" placeholder='CEP' {...register('cep', { required: 'Campo Obrigatório'})} value={cep} onChange={onCepChange} />
                                </div>
                                <div className='col-7'>
                                    <span className='error-message'>{formState.errors?.endereco?.message}</span>
                                    <input className='input-area w-100' type="text" placeholder='Endereço' {...register('endereco', { required: 'Campo Obrigatório' })} />
                                </div>
                                <div className='col-2'>
                                    <span className='error-message'>{formState.errors?.numero?.message}</span>
                                    <input className='input-area w-100' type="text" placeholder='Número' {...register('numero', { required: 'Campo Obrigatório' })} />
                                </div>                                
                            </div>

                            <div className='row'>
                                <div className='col-4'>
                                    <span className='error-message'>{formState.errors?.bairro?.message}</span>
                                    <input className='input-area w-100' type="text" placeholder='Bairro' {...register('bairro', { required: 'Campo Obrigatório' })} />
                                </div>
                                <div className='col-4'>
                                    <span className='error-message'>{formState.errors?.cidade?.message}</span>
                                    <input className='input-area w-100' type="text" placeholder='Cidade' {...register('cidade', { required: 'Campo Obrigatório' })} />
                                </div>
                                <div className='col-4'>
                                    <span className='error-message'>{formState.errors?.estado?.message}</span>
                                    <input className='input-area w-100' type="text" placeholder='Estado' {...register('estado', { required: 'Campo Obrigatório' })} />                                            
                                </div>
                            </div>

                            <button className='btn-style w-100' type='submit'>Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CadastroUsuario
