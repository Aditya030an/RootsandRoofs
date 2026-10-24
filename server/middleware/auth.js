import jwt from "jsonwebtoken";
import { config } from "../config.js";

export const signToken = (email) =>
  jwt.sign({ email, role: "admin" }, config.jwtSecret, { expiresIn: "12h" });

export const requireAdmin = (req, res, next) => {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ message: "Authentication required" });
  try {
    const payload = jwt.verify(token, config.jwtSecret);
    if (payload.role !== "admin") throw new Error("not admin");
    req.admin = payload;
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired session" });
  }
};
