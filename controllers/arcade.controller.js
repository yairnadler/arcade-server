import { fetchGamesFromDB } from "../models/utils.js";

export async function getAllGames(req, res) {
  try {
    const games = await fetchGamesFromDB();
    res.status(200).send(JSON.stringify(games));
  } catch (error) {
    res.status(400).send("no games found");
    console.log(error.message);
  }
}
