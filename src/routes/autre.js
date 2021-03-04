const express = require('express');
const router = express.Router();

const autreController = require('../controllers/autreControllers');


router.post('/etatPrest/', autreController.etatdesPrest ); 
module.exports = router;