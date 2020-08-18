import mongoose, { Schema } from "mongoose";
import { ICard } from "./../interfaces/card";

const cardSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: false,
  },
  productCode: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    default: true,
  },
  overview: {
    type: String,
  },
  size: {
    type: [String],
    required: true,
  },
  length: {
    type: Number,
  },

  productDescription: {
    type: String,
  },
  additionalInfo: {
    type: String,
  },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  productsTags: [String],
  image: {
    type: String,
  },
  images: {
    type: [String],
  },
});

export const Cards = mongoose.model<ICard>("Cards", cardSchema);
