import express from "express";
import { Movie } from "../models/movie.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const movies = await Movie.find().lean();
  res.json(movies);
});

router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).lean();
    res.json(movie);
  } catch (err) {
    console.error(err);
    res.sendStatus(404)
  }
});

export default router;
