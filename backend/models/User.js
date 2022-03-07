const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");
// create the user mongodb schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 20,
    },
  },
  { versionKey: false }
);

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
    },
    "mysecretkey" // in production this should be a env variable
  );

  return token;
};

// create the user model
const User = mongoose.model("User", userSchema);

// validator function for the body of the user request json
const userValidator = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(user);
};

module.exports = {
  userSchema,
  User,
  validate: userValidator,
};
