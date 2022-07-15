require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");

const { Neighbourhood } = require("./models");

const app = express();
const uri = process.env.URI;

app.use(express.json());

app.get("/neighbourhoods", async (req, res) => {
  const allNeighbourhoods = await Neighbourhood.find();
  return res.status(200).json(allNeighbourhoods);
});

app.get("/neighbourhoods/:id", async (req, res) => {
  const { id } = req.params;
  const neighbourhood = await Neighbourhood.findById(id);
  return res.status(200).json(neighbourhood);
});

app.post("/neighbourhoods", async (req, res) => {
  const newNeighbourhood = new Neighbourhood({ ...req.body });
  const insertedNeighbourhood = await newNeighbourhood.save();
  return res.status(201).json(insertedNeighbourhood);
});

app.put("neighbourhoods/:id", async (req, res) => {
  const { id } = req.params;
  await Neighbourhood.updateOne({ id }, req.body);
  const updatedNeighbourhood = await Neighbourhood.findById(id);
  return res.status(200).json(updatedNeighbourhood);
});

app.delete("/neighbourhoods/:id", async (req, res) => {
  const { id } = req.params;
  const deletedNeighbourhood = await Neighbourhood.findByIdAndDelete(id);
  return res.status(200).json(deletedNeighbourhood);
});

const start = async () => {
  try {
    await mongoose.connect(uri);
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
