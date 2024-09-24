import { ArcadeGameModel } from "./ArcadeGames.js";
import mongoose from "mongoose";


export default function connect(mongoPassword){
  mongoose.connect(
    `mongodb+srv://yairnadler7:${mongoPassword}@cluster0.s7myk.mongodb.net/arcade-app`
  );
}

export async function fetchGamesFromDB() {
  const games = await ArcadeGameModel.find().select("_id title image link"); 
  return games;
}