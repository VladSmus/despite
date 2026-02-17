import express from "express";
import cors from "cors";

import { clerkMiddleware } from "@clerk/express";

import authRoutes from "./routes/authRoutes";
import chatRoutes from "./routes/chatRoutes";
import messageRoutes from "./routes/messageRoutes";
import userRoutes from "./routes/userRoutes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
app.use(cors()); // Configure with specific origins for production
app.use(express.json()); // <--- parses incoming JSON request bodies and makes them available as req.body in route handlers

app.use(clerkMiddleware()); // <--- for a session JWT (JSON Web Token)

app.get("/health", (request, response) => {
  response.json({ status: "ok", message: "Server is running" });
});
// --- titile, img, some information => req.body.title ---
app.use("/api/auth", authRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler); // <--- errorHandler must come after all the routes and other middlewares
// they catch errors passed with next(err) or thrown inside async handlers

export default app;
