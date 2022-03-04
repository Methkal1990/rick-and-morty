const express = require("express");
const router = express.Router();
const { getAllCharacters, getCharacter } = require("../controllers/Character");

router.get("/", async (req, res) => {
  const characters = await getAllCharacters();
  res.send({ success: true, data: characters });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const character = await getCharacter(id);
  res.send({ success: true, data: character });
});

router.post("/:id/favourite", async (req, res) => {
  res.send({ success: true, data: "data for post" });
});

module.exports = router;
