import axios from "axios";

const baseURL = 'http://localhost:3000'

async function contaDados() {
    try {
        const usuariosResponse = await axios.get(`${baseURL}/usuarios`)
        const contUsuarios = usuariosResponse.data.length

        const destinosResponse = await axios.get(`${baseURL}/destinos`)
        const contDestinos = destinosResponse.data.length

        return { contUsuarios, contDestinos }
        
    } catch (error) {
        console.error('Erro ao obter contagem:', error.message)
        return { numeroUsuarios: 0, numeroDestinos: 0 }
    }
}

export default contaDados
