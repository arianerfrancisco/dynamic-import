export const saudacao = () => {
    let data = new Date().toLocaleDateString() // data de acordo com o SO
    return `Olá, seja bem-vindo. Hoje é ${data}`
}

