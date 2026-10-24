import mongoose from "mongoose";
import { config } from "./config.js";

// Cached across invocations so serverless cold starts reuse one connection.
let connecting = null;

export const connectDb = () => {
  if (mongoose.connection.readyState === 1) return Promise.resolve();
  if (!connecting) {
    connecting = mongoose
      .connect(config.mongoUri, { serverSelectionTimeoutMS: 8000 })
      .catch((err) => {
        connecting = null;
        throw err;
      });
  }
  return connecting;
};
