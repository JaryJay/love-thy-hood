const { User } = require("../models");

let UserEndpoints = {
  getAll: async (req, res) => {
    try {
      const allUsers = await User.find();
      return res.status(200).json(allUsers);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error.toString());
    }
  },
  get: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error.toString());
    }
  },
  post: async (req, res) => {
    try {
      const newUser = new User({ ...req.body });
      const allUsers = await User.find();
      if (allUsers.filter(u => u.name === newUser.name).length) {
        throw "Duplicate user";
      }
      console.log(newUser);
      const insertedUser = await newUser.save();
      return res.status(201).json(insertedUser);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error.toString());
    }
  },
  put: async (req, res) => {
    try {
      const { id } = req.params;
      await User.updateOne({ id }, req.body);
      const updatedUser = await User.findById(id);
      return res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error.toString());
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedUser = await User.findByIdAndDelete(id);
      return res.status(200).json(deletedUser);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error.toString());
    }
  },
};

module.exports = UserEndpoints;
