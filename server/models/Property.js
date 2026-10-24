import mongoose from "mongoose";

const { Schema } = mongoose;

// Mirrors the objects in src/utils/propertyList.js. Fields whose shape varies
// between listings (price can be a number or a list of { label, price }, etc.)
// are Mixed so every existing property can be stored without loss.
const propertySchema = new Schema(
  {
    id: { type: Number, required: true, unique: true, index: true },
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    location: { type: String, default: "" },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    type: { type: String, default: "Buy" }, // Buy | Rent
    propertyType: { type: String, default: "" },
    bhk: { type: String, default: "" },
    area: { type: String, default: "" },
    description: { type: String, default: "" },
    price: { type: Schema.Types.Mixed, default: 0 },
    pricePerSqFt: { type: Schema.Types.Mixed, default: 0 },
    verified: { type: Boolean, default: true },
    featured: { type: Boolean, default: false },
    promoted: { type: Boolean, default: false }, // advertised in the site's right-side panel
    promotedOrder: { type: Number, default: 0 }, // lower shows first
    readyToMove: { type: Boolean, default: false },
    bathrooms: { type: Number, default: 0 },
    parking: { type: Boolean, default: false },
    furnishing: { type: String, default: "" },
    balcony: { type: Boolean, default: false },
    servantRoom: { type: Boolean, default: false },
    construction: { type: String, default: "" },
    listingType: { type: String, default: "" },
    contact: { type: Boolean, default: true },
    keyHighlights: { type: [Schema.Types.Mixed], default: [] },
    projectData: { type: [Schema.Types.Mixed], default: [] },
    images: { type: [String], default: [] },
    galleries: { type: [Schema.Types.Mixed], default: [] },
    floorPlan: { type: Schema.Types.Mixed, default: () => ({ image: "", pdf: "" }) },
    floorPlans: { type: [Schema.Types.Mixed], default: undefined },
    map: { type: Schema.Types.Mixed, default: () => ({ image: "", locationLink: "" }) },
    sections: {
      type: Schema.Types.Mixed,
      default: () => ({
        overview: "",
        amenities: [],
        specifications: [],
        connectivity: [],
        vision: [],
      }),
    },
    developer: { type: Schema.Types.Mixed, default: () => ({ name: "", description: "" }) },
    disclaimer: { type: String, default: "" },
    published: { type: Boolean, default: true },
  },
  { timestamps: true, minimize: false, strict: false },
);

propertySchema.index({ title: "text", location: "text", "developer.name": "text" });

export default mongoose.models.Property || mongoose.model("Property", propertySchema);
