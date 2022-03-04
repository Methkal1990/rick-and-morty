// a module to controling login and authentication
const _ = require("lodash");
const express = require("express");
const { User, validate } = require("../models/user");
const router = express.Router();
const Joi = require("@hapi/joi");
const bcrypt = require("bcrypt");

// loging a user
router.post("/", async (req, res) => {
  // validate the request body
  const { error } = validate(req.body);
  // if there is an error return 400 bad request
  if (error) return res.status(400).send(error.details[0].message);

  // look for the user
  let user = await User.findOne({ name: req.body.name });
  // if user exists return 400 bad request
  if (!user) return res.status(400).send("invalid name or password");

  // validate password
  const validPassword = await bcrypt.compare(req.body.password, user.password);

  // not valid password
  if (!validPassword) return res.status(400).send("invalid name or password");

  const token = user.generateAuthToken();

  res.send(token);
});

module.exports = router;
