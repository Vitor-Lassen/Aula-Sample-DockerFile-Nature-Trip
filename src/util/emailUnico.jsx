async function checkEmailUnico(email) {
    try {
        const response = await fetch(`http://localhost:3000/usuarios?email=${email}`)
        const data = await response.json()
        return data.length === 0
    } catch (error) {
        alert("Erro ao verificar e-mail")
        return false
    }
}

export default checkEmailUnico
