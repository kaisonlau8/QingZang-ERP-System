const express = require('express');
const router = express.Router();
const modelStationAltitudeCoefficientController = require('../controllers/modelStationAltitudeCoefficientController');

router.post('/', modelStationAltitudeCoefficientController.create);
router.get('/', modelStationAltitudeCoefficientController.getAll);
router.get('/:id', modelStationAltitudeCoefficientController.getById);
router.put('/:id', modelStationAltitudeCoefficientController.update);
router.delete('/:id', modelStationAltitudeCoefficientController.delete);

module.exports = router;
