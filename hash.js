//Criando uma hash

import { createHash } from 'crypto'

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex')
}

console.log(criaHash("uma String Qualquer"))

//Usuário gerando nome e senha

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha);
    }

//Método de validação do usuário

autentica(nome, senha){
    if (nome === this.nome && this.hash === criaHash(senha)){
        console.log("Usuário autenticado com sucesso!");
        return true;
    }

            console.log("Usuário ou senha incorretos.");
    return false;
}
}

//Autenticando o usuário

const usuario = new Usuario('eddie', '123')

console.log(usuario)

//Caso de sucesso

usuario.autentica('eddie', '123')

//Casos de fracasso
usuario.autentica('Eddie', '65312')