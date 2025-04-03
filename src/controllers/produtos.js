const db = require('../database/connection'); 

module.exports = {
    async listarProdutos (request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de produtos.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na listagem de produtos.', 
                dados: error.message
            });
        }
    },
    async cadastrarProdutos (request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de produtos.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na listagem de produtos.', 
                dados: error.message
            });
        }
    },
    async editarProdutos (request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar produto.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na listagem de produtos.', 
                dados: error.message
            });
        }
    },
    async apagarProdutos (request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar produto.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na listagem de produtos.', 
                dados: error.message
            });
        }
    },
}