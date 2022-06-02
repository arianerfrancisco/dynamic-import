export function getEnderecoByCEP(cep){
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
}