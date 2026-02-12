import mongoose from "mongoose";

const MomentSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

export default mongoose.model.Moment ||
  mongoose.model("Moment", MomentSchema);
