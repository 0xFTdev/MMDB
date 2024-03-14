import mongoose, { Schema } from "mongoose";

const favoriteSchema = new Schema({
  movie: {
    type: mongoose.Types.ObjectId,
    ref: "Movie",
  },
});

export const Favorite = mongoose.model("Favorite", favoriteSchema, "favorites");
