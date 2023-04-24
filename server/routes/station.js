const express = require('express');
const router = express.Router();
const stationController = require('../controllers/stationController');

router.post('/', stationController.create);
router.get('/', stationController.getAll);
router.get('/:id', stationController.getById);
router.put('/:id', stationController.update);
router.delete('/:id', stationController.delete);

module.exports = router;
