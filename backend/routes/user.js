const express = require("express");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const router = express.Router();
const { User, validate } = require("../models/user");

// register a new user
router.post("/", async (req, res) => {
  // validate tthe request body for new user
  const { error } = validate(req.body);
  // if there is an error return 400 bad request
  if (error) return res.status(400).send(error.details[0].message);

  // check if the user with the same username already exists
  let user = await User.findOne({ name: req.body.name });
  // if user exists return 400 bad request
  if (user) return res.status(400).send("user already registered");

  // create the user object
  user = new User(_.pick(req.body, ["name", "password"]));

  // create a salt to use for bcrypt password hashing in the next step
  const salt = await bcrypt.genSalt(10);
  // hashing the password
  user.password = await bcrypt.hash(user.password, salt);

  // save the user
  await user.save();

  // generate the token for the subsequent requests
  const token = user.generateAuthToken();

  // send the token and  the user data to the client
  res.send({ ..._.pick(user, ["_id", "name"]), token });
});

module.exports = router;
