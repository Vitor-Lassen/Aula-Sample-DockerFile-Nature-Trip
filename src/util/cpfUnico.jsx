async function checkCpfUnico(cpf) {
    try {
        const response = await fetch(`http://localhost:3000/usuarios?cpf=${cpf}`)
        const data = await response.json()
        return data.length === 0
    } catch (error) {
        alert("Erro ao verificar CPF")
        return false;
    }
}

export default checkCpfUnico
