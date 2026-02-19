import express from "express";
import path from "path";
// import cors from "cors";

import { clerkMiddleware } from "@clerk/express";

import authRoutes from "./routes/authRoutes";
import chatRoutes from "./routes/chatRoutes";
import messageRoutes from "./routes/messageRoutes";
import userRoutes from "./routes/userRoutes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

// const allowedOrigins = [
//   "http://localhost:8081", // expo mobile
//   "http://localhost:5173", // vite web devs
//   process.env.FRONTEND_URL!, // production
// ].filter(Boolean);

// app.use(
//   cors({
//     origin: allowedOrigins,
//     credentials: true, // <--- allow credentials from client (cookies, auth header, etc)
//   }),
// );

app.use(express.json()); // <--- parses incoming JSON request bodies and makes them available as req.body in route handlers
app.use(clerkMiddleware()); // <--- for a session JWT (JSON Web Token)

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

// --- titile, img, some information => req.body.title ---
app.use("/api/auth", authRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler); // <--- errorHandler must come after all the routes and other middlewares
// they catch errors passed with next(err) or thrown inside async handlers

// serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../web/dist")));

  app.get("/{*any}", (_, res) => {
    res.sendFile(path.join(__dirname, "../../web/dist/index.html"));
  });
}

export default app;
