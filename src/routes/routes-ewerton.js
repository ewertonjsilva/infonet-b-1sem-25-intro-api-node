const express = require('express'); 
const router = express.Router(); 
 
const UsuariosController = require('../controllers/usuarios');  
const ProdutosController = require('../controllers/produtos');

router.get('/usuarios', UsuariosController.listarUsuarios); 
router.post('/usuarios', UsuariosController.cadastrarUsuarios); 
router.patch('/usuarios', UsuariosController.editarUsuarios); 
router.delete('/usuarios', UsuariosController.apagarUsuarios); 

module.exports = router;