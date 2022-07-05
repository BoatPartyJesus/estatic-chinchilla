import { Router } from "express";
import SearchRouter from "./search";

const router = Router();
router.use("/search", SearchRouter);

export default router;