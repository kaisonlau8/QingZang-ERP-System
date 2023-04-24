const express = require('express');
const router = express.Router();
const locomotiveModelController = require('../controllers/locomotiveModelController');

router.post('/', locomotiveModelController.create);
router.get('/', locomotiveModelController.getAll);
router.get('/:id', locomotiveModelController.getById);
router.put('/:id', locomotiveModelController.update);
router.delete('/:id', locomotiveModelController.delete);

module.exports = router;
