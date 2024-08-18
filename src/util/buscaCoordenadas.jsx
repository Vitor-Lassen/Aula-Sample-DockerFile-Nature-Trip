import axios from "axios"

async function buscaCoordenadas(coordenadas, setValue) {

    try {
        const [lat, lon] = coordenadas.split(',')

        if (!lat || !lon) {
            throw new Error('Coordenadas inválidas.');
        }

        const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`)

        if (response.data && response.data.address) {
            const cidade = response.data.address.city || response.data.address.town || response.data.address.village;
            const estado = response.data.address.state
            const pais = response.data.address.country

            if (cidade && estado && pais) {
                setValue('cidade', cidade)
                setValue('estado', estado)
                setValue('pais', pais)

            } else {
                throw new Error('Coordenadas não encontradas.')
            }
        } else {
            throw new Error('Resposta da API não contém os dados esperados.')
        }

    } catch (error) {
        console.error('Erro ao consultar coordenadas.')
    }
}

export default buscaCoordenadas
