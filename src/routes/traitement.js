const express = require('express');
const router = express.Router();

const traitementController = require('../controllers/traitementController');


router.get('/', traitementController.listT);
router.post('/addT', traitementController.saveT);
router.get('/deleteT/:idT', traitementController.deleteT); 
router.get('/updateT/:idT', traitementController.editT); 
router.post('/updateT/:idT',traitementController.updateT);

module.exports = router;