import { Router } from "express";
import { protectRoute } from "../middleware/auth";
import { getUsers } from "../controllers/userController";

const router = Router();

router.get("/", protectRoute, getUsers); // <--- GET request /api/users/

export default router;
