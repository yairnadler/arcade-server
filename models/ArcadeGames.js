import mongoose from "mongoose";

const ArcadeGameSchema = new mongoose.Schema({
  _id: String,
  title: String,
  image: String,
  link: String,
});

export const ArcadeGameModel = mongoose.model("arcade-games", ArcadeGameSchema);