import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { config } from "./config.js";
import { connectDb } from "./db.js";
import authRoutes from "./routes/auth.js";
import propertyRoutes from "./routes/properties.js";
import adminRoutes from "./routes/admin.js";

const app = express();

app.use(helmet());
app.use(compression());
app.use(
  cors({
    origin: config.clientOrigin ? config.clientOrigin.split(",").map((s) => s.trim()) : true,
  }),
);
app.use(express.json({ limit: "2mb" }));

app.get("/api/health", (req, res) => res.json({ ok: true }));

const withDb = async (req, res, next) => {
  try {
    await connectDb();
    next();
  } catch (err) {
    next(err);
  }
};

app.use("/api/auth", authRoutes);
app.use("/api/properties", withDb, propertyRoutes);
app.use("/api/admin", adminRoutes);

app.use("/api", (req, res) => res.status(404).json({ message: "Not found" }));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.name === "ValidationError" ? 400 : err.status || 500;
  res.status(status).json({ message: status === 500 ? "Server error" : err.message });
});

export default app;
