import jwt from 'jsonwebtoken';

const chaveSecreta = 'chaveSuperSecreta'

const token = jwt.sign(
    {
        apelido: 'Eddie',
        curso: 'segurança e node.js'
    }, chaveSecreta
);

console.log(token)

//Decodificando o Token JWT
const tokenDecodificado = jwt.verify(token, chaveSecreta)

console.log(tokenDecodificado)
