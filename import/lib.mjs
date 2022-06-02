export const saudacao = () => {
    let data = new Date().toLocaleDateString() // data de acordo com o SO
    return `Olá, seja bem-vindo. Hoje é ${data}`
}

export function getEnderecoByCEP(cep){
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
}