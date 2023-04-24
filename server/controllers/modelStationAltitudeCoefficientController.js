const ModelStationAltitudeCoefficient = require('../models/modelStationAltitudeCoefficient');

exports.create = async (req, res) => {
  try {
    const modelStationAltitudeCoefficient = await ModelStationAltitudeCoefficient.create(req.body);
    res.status(201).json({ modelStationAltitudeCoefficient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const modelStationAltitudeCoefficients = await ModelStationAltitudeCoefficient.findAll();
    res.status(200).json({ modelStationAltitudeCoefficients });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const modelStationAltitudeCoefficient = await ModelStationAltitudeCoefficient.findByPk(req.params.id);
    if (!modelStationAltitudeCoefficient) {
      res.status(404).json({ message: 'ModelStationAltitudeCoefficient not found' });
    } else {
      res.status(200).json({ modelStationAltitudeCoefficient });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    await ModelStationAltitudeCoefficient.update(req.body, { where: { id: req.params.id } });
    const updatedModelStationAltitudeCoefficient = await ModelStationAltitudeCoefficient.findByPk(req.params.id);
    res.status(200).json({ updatedModelStationAltitudeCoefficient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await ModelStationAltitudeCoefficient.destroy({ where: { id: req.params.id } });
    res.status(204).json({ message: 'ModelStationAltitudeCoefficient deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
