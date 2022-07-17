const { Neighbourhood } = require("../models");

let NeighbourhoodEndpoints = {
  getAll: async (req, res) => {
    try {
      const allNeighbourhoods = await Neighbourhood.find();
      return res.status(200).json(allNeighbourhoods);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error.toString());
    }
  },
  get: async (req, res) => {
    try {
      const { id } = req.params;
      const neighbourhood = await Neighbourhood.findById(id);
      return res.status(200).json(neighbourhood);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error.toString());
    }
  },
  post: async (req, res) => {
    try {
      const allNeighbourhoods = await Neighbourhood.find();
      const newNeighbourhood = new Neighbourhood({ ...req.body });
      if (allNeighbourhoods.filter(n => n.name === newNeighbourhood.name).length) {
        throw "Duplicate name";
      }
      const insertedNeighbourhood = await newNeighbourhood.save();
      return res.status(201).json(insertedNeighbourhood);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error.toString());
    }
  },
  put: async (req, res) => {
    try {
      const { id } = req.params;
      await Neighbourhood.updateOne({ id }, req.body);
      const updatedNeighbourhood = await Neighbourhood.findById(id);
      return res.status(200).json(updatedNeighbourhood);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error.toString());
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedNeighbourhood = await Neighbourhood.findByIdAndDelete(id);
      return res.status(200).json(deletedNeighbourhood);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error.toString());
    }
  },
};

module.exports = NeighbourhoodEndpoints;
