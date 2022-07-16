const { User } = require("../models");

let UserEndpoints = {
  getAll: async (req, res) => {
    try {
      const allUsers = await User.find();
      return res.status(200).json(allUsers);
    } catch (error) {
      return res.status(500).send("An unknown error occured.");
    }
  },
  get: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).send("An unknown error occured.");
    }
  },
  post: async (req, res) => {
    try {
      const newUser = new User({ ...req.body });
      console.log(newUser);
      const insertedUser = await newUser.save();
      return res.status(201).json(insertedUser);
    } catch (error) {
      console.log(error);
      return res.status(500).send("An unknown error occured.");
    }
  },
  put: async (req, res) => {
    try {
      const { id } = req.params;
      await User.updateOne({ id }, req.body);
      const updatedUser = await User.findById(id);
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).send("An unknown error occured.");
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedUser = await User.findByIdAndDelete(id);
      return res.status(200).json(deletedUser);
    } catch (error) {
      return res.status(500).send("An unknown error occured.");
    }
  },
};

module.exports = UserEndpoints;
