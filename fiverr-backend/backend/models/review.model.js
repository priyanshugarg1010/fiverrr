import { NUM } from "xlsx-populate/lib/FormulaError";

// eslint-disable-next-line no-undef
const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema(
  {
    gigID: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
    star: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5],
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", ReviewSchema);
