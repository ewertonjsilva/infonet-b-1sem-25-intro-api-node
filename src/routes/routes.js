const express = require('express'); 
const router = express.Router(); 

import RotasEwerton from './routes-ewerton';
import RotasJose from './routes-jose';

router.use('/', RotasEwerton);
router.use('/', RotasJose);

module.exports = router;