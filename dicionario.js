import { createHash } from 'crypto'

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }

    criaHash(senha){
        return createHash('sha256').update(senha).digest('hex')
    }

    autentica(nome, senha){
        if (nome === this.nome && this.hash === this.criaHash(senha)){
            console.log("Usuário autenticado com sucesso!");
            return true;
        }

        //console.log("Usuário ou senha incorretos.");
        return false;
    }
}

const usuario = new Usuario('eddie', 'senha2023')

// código omitido

const senhasComuns = ["senha", "123456",
 "senha2023", "admin", "blink182","meuAniversario", "senha123456", "brasil", "102030"]

 // código omitido

senhasComuns.map( senha => {
    if (usuario.autentica("eddie", senha)){
        console.log(`A senha do usuário é ${senha}`)
    }
})