const LocomotiveModel = require('../models/locomotiveModel');

exports.create = async (req, res) => {
  try {
    const locomotiveModel = await LocomotiveModel.create(req.body);
    res.status(201).json({ locomotiveModel });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const locomotiveModels = await LocomotiveModel.findAll();
    res.status(200).json({ locomotiveModels });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const locomotiveModel = await LocomotiveModel.findByPk(req.params.id);
    if (!locomotiveModel) {
      res.status(404).json({ message: 'LocomotiveModel not found' });
    } else {
      res.status(200).json({ locomotiveModel });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    await LocomotiveModel.update(req.body, { where: { id: req.params.id } });
    const updatedLocomotiveModel = await LocomotiveModel.findByPk(req.params.id);
    res.status(200).json({ updatedLocomotiveModel });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await LocomotiveModel.destroy({ where: { id: req.params.id } });
    res.status(204).json({ message: 'LocomotiveModel deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
