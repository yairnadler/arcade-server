import { Router } from "express";
import { getAllGames } from "../controllers/arcade.controller.js";

const router = Router();

router.get("/games", getAllGames);

export default router;