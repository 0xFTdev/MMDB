import express from "express";
import { Favorite } from "../models/favorite.js";
import { Movie } from "../models/movie.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const favorites = await Favorite.find().lean();
  res.json(favorites);
});

router.post("/:id", async (req, res) => {
  try {
    const favoritedMovie = await Movie.findById(req.params.id);
    if (!favoritedMovie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    const newFavorite = new Favorite({ movie: favoritedMovie._id });
    await newFavorite.save();
    res.json(newFavorite);
  } catch (error) {
    console.error("Error saving favorite:", error);
    res.status(500).json({ error: "Failed to save favorite" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteResult = await Favorite.deleteOne({ _id: req.params.id });
    if (deleteResult.deletedCount === 0) {
      return res.status(404).json({ error: "Favorite not found" });
    }
    res.json({ message: "Favorite deleted successfully" });
  } catch (error) {
    console.error("Error deleting favorite:", error);
    res.status(500).json({ error: "Failed to delete favorite" });
  }
});

export default router;
