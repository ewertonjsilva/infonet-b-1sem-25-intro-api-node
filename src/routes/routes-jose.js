const express = require('express'); 
const router = express.Router(); 
 
const UsuariosController = require('../controllers/usuarios');  
const ProdutosController = require('../controllers/produtos');

router.get('/produtos', ProdutosController.listarProdutos); 
router.post('/produtos', ProdutosController.cadastrarProdutos); 
router.patch('/produtos', ProdutosController.editarProdutos); 
router.delete('/produtos', ProdutosController.apagarProdutos); 

module.exports = router;