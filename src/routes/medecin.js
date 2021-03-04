const express = require('express');
const router = express.Router();

const medecinController = require('../controllers/medecinController');


router.get('/', medecinController.list);
router.post('/add',medecinController.save);
router.get('/delete/:id',medecinController.delete); 

router.get('/update/:id',medecinController.edit); 

router.post('/update/:id',medecinController.update); 



module.exports = router;