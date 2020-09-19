const connection = require('../database/connections.js');

module.exports = {
    async create(request, response){
        try {
            const {
                nome,
                sexo,
                datanasc,
                endereco,
                cpf,
                numero,
                matricula,
                batalhao,
                batalhaointeresse,
                disponibilidade,
                orgao,
                comportamento,
                login,
                senha
            } = request.body;
    
            await connection('users').insert({
                nome,
                sexo,
                datanasc,
                endereco,
                cpf,
                numero,
                matricula,
                batalhao,
                batalhaointeresse,
                disponibilidade,
                orgao,
                comportamento,
                login,
                senha
            });
            return response.json('Sucess!');
        } catch (error) {
            return response.json(error);
        }
    },

    async list(request, response){
        try {
            const users = await connection('users').select('*');
            return response.json(users);
        } catch (error) {
            return response.json(error);
        }
    },

    async update(request, response){
        try {
            const {cpf, campo, novoValor} = request.body;
            await connection('users').select('*').where('cpf', cpf).first().update(campo, novoValor);
            return response.json("Sucess!");
        } catch (error) {
            return response.json(error);
        }
    },

    async delete(request, response){
        try {
            const cpf = request.body.cpf;
            await connection('users').select('*').where('cpf', cpf).first().del();
            return response.json("Sucess!");
        } catch (error) {
            return response.json(error);
        }
    }
}