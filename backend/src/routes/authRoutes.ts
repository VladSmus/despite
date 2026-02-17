import { Router } from "express";
import { getMe, authCallback } from "../controllers/authController";
import { protectRoute } from "../middleware/auth";

const router = Router();

router.get("/me", protectRoute, getMe); // <--- /api/auth/me
router.post("/callback", authCallback);

export default router;
