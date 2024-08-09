import '../CadastroUsuario/CadastroUsuario.css'
import Menu from '../../componentes/Menu/Menu'
import { useForm } from 'react-hook-form'

function CadastroUsuario() {
    const { register, handleSubmit, formState } = useForm()

    console.log(formState.errors)

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
                <div className="container flex-column">
                    <h2 className='titulo'>Cadastre-se</h2>
                    <div>
                        <form className='flex-column form-container-usuario' onSubmit={handleSubmit(addUser)}>
                            <input className='input-area' type="text" placeholder='Nome' {...register('nome', { required: 'Campo Obrigatório' })} />
                            {formState.errors?.nome?.message}
                            <div className='flex-row-wrap'>
                                <select className='input-area espaco-auto' {...register('sexo')}>
                                    <option value=""></option>
                                    <option value="feminino">Feminino</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="na">Prefiro não informar</option>
                                </select>
                                <input className='input-area espaco-auto' type="text" placeholder='CPF' {...register('cpf', { required: 'Campo Obrigatório' })} />
                                <input className='input-area espaco-auto' type="text" placeholder='Data de Nascimento' {...register('data_nasc', { required: 'Campo Obrigatório' })} />
                            </div>
                            <div className='flex-row-wrap'>
                                <input className='input-area espaco-auto' type="text" placeholder='E-mail' {...register('email', { required: 'Campo Obrigatório' })} />
                                <input className='input-area espaco-auto' type="text" placeholder='Senha' {...register('senha', { required: 'Campo Obrigatório' })} />
                            </div>
                            <div className='flex-row-wrap'>
                                <input className='input-area espaco-auto' type="text" placeholder='CEP' {...register('cep')} />
                                <input className='input-area espaco-auto' type="text" placeholder='Endereço' {...register('endereco', { required: 'Campo Obrigatório' })} />
                                <input className='input-area espaco-auto' type="text" placeholder='Número' {...register('numero', { required: 'Campo Obrigatório' })} />
                                <input className='input-area espaco-auto' type="text" placeholder='Bairro' {...register('bairro', { required: 'Campo Obrigatório' })} />
                            </div>

                            <input className='input-area espaco-auto' type="text" placeholder='Cidade' {...register('cidade', { required: 'Campo Obrigatório' })} />
                            <input className='input-area espaco-auto' type="text" placeholder='Estado' {...register('estado', { required: 'Campo Obrigatório' })} />
                            <button type='submit'>Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CadastroUsuario
