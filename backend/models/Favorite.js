const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

// create the favorites mongodb schema
const favoritesSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    characterId: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Favorite = mongoose.model("Favorite", favoritesSchema);

module.exports = {
  Favorite,
};
