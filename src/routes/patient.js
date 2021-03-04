const express = require('express');
const router = express.Router();

const patientController = require('../controllers/patientController');


router.get('/', patientController.listP);
router.post('/addP', patientController.saveP);
router.get('/deleteP/:idP', patientController.deleteP); 
router.get('/updateP/:idP', patientController.editP); 
router.post('/updateP/:idP',patientController.updateP);

module.exports = router;