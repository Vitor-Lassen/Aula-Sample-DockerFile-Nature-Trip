import axios from "axios"

async function buscaCep(cep, setValue) {

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
        console.log('Erro ao buscar CEP: ', error)
    }
}

export default buscaCep
