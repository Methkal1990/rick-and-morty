const express = require("express");
const router = express.Router();
const axios = require("axios");
const auth = require("../middlewares/auth");
const { Favorite } = require("../models/Favorite");

router.get("/", auth, async (req, res) => {
  const characters = await axios.get(
    "https://rickandmortyapi.com/api/character"
  );
  // build the results with isFavorite property
  const userFavorites = await Favorite.find({ userId: req.user._id });
  const results = characters.data.results.map((character) => {
    const isFavorite = userFavorites.find(
      (favorite) => parseInt(favorite.characterId) === character.id
    );
    return { ...character, isFavorite: !!isFavorite };
  });

  res.send(results);
});

router.get("/:id", auth, async (req, res) => {
  const { id } = req.params;
  // build the results with isFavorite property
  const isFavorite = await Favorite.find({
    userId: req.user._id,
    characterId: id,
  });
  const character = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  res.send({ ...character.data, isFavorite: !!isFavorite.length });
});

router.post("/favorite", auth, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).send("character id is required");
  const characterFav = await Favorite.findOne({
    userId: req.user._id,
    characterId: id,
  });
  // if is not already a favorite add it
  if (!characterFav) {
    const newFav = new Favorite({
      userId: req.user._id,
      characterId: id,
    });
    await newFav.save();
    // if is already a favorite remove it
  } else {
    await Favorite.remove({
      userId: req.user._id,
      characterId: id,
    });
  }
  res.send("success").status(201);
});

module.exports = router;
