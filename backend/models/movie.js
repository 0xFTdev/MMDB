import mongoose, { Schema } from "mongoose";

const moviesSchema = new Schema({}, {strict: false});

export const Movie = mongoose.model("Movie", moviesSchema, "movies");
