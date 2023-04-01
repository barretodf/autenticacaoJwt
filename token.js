import jwt from 'jsonwebtoken';

const chaveSecreta = 'chaveSuperSecreta'

const token = jwt.sign(
    {
        apelido: 'Eddie',
        curso: 'segurança e node.js'
    }, chaveSecreta
);

console.log(token);

