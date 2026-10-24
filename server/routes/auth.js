import { Router } from "express";
import crypto from "node:crypto";
import rateLimit from "express-rate-limit";
import { config } from "../config.js";
import { requireAdmin, signToken } from "../middleware/auth.js";

const router = Router();

const safeEqual = (a, b) => {
  const ha = crypto.createHash("sha256").update(String(a)).digest();
  const hb = crypto.createHash("sha256").update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
};

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many login attempts. Try again in 15 minutes." },
});

router.post("/login", loginLimiter, (req, res) => {
  const { email = "", password = "" } = req.body || {};
  const okEmail = safeEqual(String(email).trim().toLowerCase(), config.adminEmail);
  const okPassword = safeEqual(password, config.adminPassword);
  if (!okEmail || !okPassword) {
    return res.status(401).json({ message: "Incorrect email or password" });
  }
  res.json({ token: signToken(config.adminEmail), email: config.adminEmail });
});

router.get("/me", requireAdmin, (req, res) => {
  res.json({ email: req.admin.email });
});

export default router;
