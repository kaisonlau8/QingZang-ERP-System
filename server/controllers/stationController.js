const Station = require('../models/station');

exports.create = async (req, res) => {
  try {
    const station = await Station.create(req.body);
    res.status(201).json({ station });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const stations = await Station.findAll();
    res.status(200).json({ stations });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const station = await Station.findByPk(req.params.id);
    if (!station) {
      res.status(404).json({ message: 'Station not found' });
    } else {
      res.status(200).json({ station });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    await Station.update(req.body, { where: { id: req.params.id } });
    const updatedStation = await Station.findByPk(req.params.id);
    res.status(200).json({ updatedStation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Station.destroy({ where: { id: req.params.id } });
    res.status(204).json({ message: 'Station deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
