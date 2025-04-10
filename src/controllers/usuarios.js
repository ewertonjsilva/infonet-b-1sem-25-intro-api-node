const db = require('../database/connection'); 

module.exports = {
    async listarUsuarios (request, response) {
        try {

            const sql = `SELECT 
                usu_id, usu_nome, usu_email, usu_cpf, usu_dt_nasc, 
                usu_senha, usu_tipo, usu_ativo = 1 AS usu_ativo 
                FROM usuarios;`;

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
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de usuários.', 
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