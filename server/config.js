import "dotenv/config";

const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
};

export const config = {
  get mongoUri() {
    return required("MONGODB_URI");
  },
  get jwtSecret() {
    return required("JWT_SECRET");
  },
  get adminEmail() {
    return required("ADMIN_EMAIL").trim().toLowerCase();
  },
  get adminPassword() {
    return required("ADMIN_PASSWORD");
  },
  cloudinary: {
    get cloudName() {
      return required("CLOUDINARY_CLOUD_NAME");
    },
    get apiKey() {
      return required("CLOUDINARY_API_KEY");
    },
    get apiSecret() {
      return required("CLOUDINARY_API_SECRET");
    },
  },
  folder: process.env.CLOUDINARY_FOLDER || "propertyList",
  clientOrigin: process.env.CLIENT_ORIGIN || "",
  port: Number(process.env.PORT) || 5000,
};
