import mongoose from "mongoose";

const YoutubeSchema = new mongoose.Schema({
  YoutubeHeading: String,
  Youtubelink: String
});

const LocationSchema = new mongoose.Schema({
  city: String,
  state: String,
  country: String,
  pincode: String
});

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: String,
    description: String,
    date: String,
    slug: String,

    banner: String,
    thumbnail: String,
    gallery: [String],

    youtube: [YoutubeSchema],
    location: LocationSchema,

    map: String,
    website: String,

    metaTitle: String,
    metaDescription: String,
    metaKeyword: String,

    published: { type: Boolean, default: false },
    featured: { type: Boolean, default: false },
    eventGrid: { type: Boolean, default: false },
    university: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.models.Event ||
  mongoose.model("Event", EventSchema);
