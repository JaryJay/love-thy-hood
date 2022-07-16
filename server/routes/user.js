require("dotenv").config({ path: "../config.env" });
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {createJWT} = require("../auth");

let UserEndpoints = {
  signup: async (req, res, next) => {
    try {
      let { name, email, password, password_confirmation } = req.body;
      console.log(req.body);
      User.findOne({ email: email })
      .then((user) => {
        if (user) {
          return res.status(422).send("Email already exists.");
        } else {
          const user = new User({
            name: name,
            email: email,
            password: password,
          });

          bcrypt.genSalt(10, function (err, salt) {
            bcrypt.has(password, salt, function (err, hash) {
              user.password = hash;
              user.save().then((response) => {
                return res.status(200).json({ success: true, result: response });
              });
            });
          });
        }
      });
    } catch (error) {
      return res.status(500).send("An unknown error occured.");
    }
  },
  signin: async (req, res) => {
    try {
      let (email, password) = req.body;
      User.findOne({email: email}).then(user => {
        if (!user) {
          return res.status(404).send("User not found");
        } else {
          bcrypt.compare(password, user.password).then(isMatch => {
            if (!isMatch) {
              return res.status(400).send("Password incorrect.");
            }
          })
        }

        let access_token = createJWT(user.email, user._id, 3600);
        jwt.verify(access_token, process.env.TOKEN_SECRET, (err, decoded) => {
          if (decoded) {
            return res.status(200).json({
              success: true,
              token: access_token,
              message: user})
          }
        })
      })
    } catch (error) {
      return res.status(500).send("An unknown error occured.")
    }
  },
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
