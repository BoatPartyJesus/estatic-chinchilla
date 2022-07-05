import { Router } from "express";

const router = Router();
router.get("/", (_, response) => response.send("Search"));

export default router;
