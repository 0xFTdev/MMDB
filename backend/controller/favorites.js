import express from "express";
import { Favorite } from "../models/favorite.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const favorites = await Favorite.find().lean();
  res.json(favorites);
});

router.post("/:id", async (req, res) => {
  const favorite = await Favorite.findById(req.param.id).lean();
  res.json(favorite);
});

router.delete("/:id", async (req, res) => {
  const favorite = await Favorite.findById(req.param.id).lean();
  res.json(favorite);
});

export default router;
