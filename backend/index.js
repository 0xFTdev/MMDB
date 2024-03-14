import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

import movieRouter from "./controller/movies.js";

await mongoose.connect(process.env.MONGODB_URI);

const PORT = 3000;
const app = express();

const corsOptions = {
  origin: process.env.BACKEND_URL,
  optionsSuccessStatus: 200,
};

app.use(express());
app.use(cors(corsOptions));
app.use("/movies", movieRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${process.env.BACKEND_URL}`);
});
