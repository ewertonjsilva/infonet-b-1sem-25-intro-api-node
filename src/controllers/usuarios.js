const db = require('../database/connection'); 

module.exports = {
    async listarUsuarios (request, response) {
        try {

            const sql = `
                SELECT 
                    usu_id, usu_nome, usu_email, usu_cpf, usu_dt_nasc, 
                    usu_senha, usu_tipo, usu_ativo = 1 AS usu_ativo 
                FROM usuarios;
            `;

            const [row] = await db.query(sql);      
            const nItens = row.length;      

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários.', 
                nItens,
                dados: row
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na listagem de usuários.', 
                dados: error.message
            });
        }
    },
    async cadastrarUsuarios (request, response) {
        try {

            const { nome, email, senha, tipo, dataNascimento, cpf } = request.body;
            const ativo = 1;

            const sql = `
                INSERT INTO usuarios 
                    (usu_nome, usu_email, usu_senha, 
                    usu_tipo, usu_ativo, usu_dt_nasc, usu_cpf) 
                VALUES (?, ?, ?, ?, ?, ?, ?);
            `

            const values = [nome, email, senha, tipo, ativo, dataNascimento, cpf]; 

            const [result] = await db.query(sql, values); 

            const dados = {
                id: result.insertId, 
                nome, 
                email, 
                tipo
            };

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de usuários efetuado com sucesso.', 
                dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro no cadastro de usuários.', 
                dados: error.message
            });
        }
    },
    async editarUsuarios (request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar usuário.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na listagem de usuários.', 
                dados: error.message
            });
        }
    },
    async apagarUsuarios (request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar usuário.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na listagem de usuários.', 
                dados: error.message
            });
        }
    },
}

