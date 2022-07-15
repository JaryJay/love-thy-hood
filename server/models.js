const mongoose = require("mongoose");

const NeighbourhoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

const Neighbourhood = mongoose.model("Neighbourhood", NeighbourhoodSchema);

module.exports = { Neighbourhood };
