import mongoose, { Schema } from "mongoose";
import { IUser } from "./../interfaces/user";
const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  basket: [
    {
      elementId: {
        type: Schema.Types.ObjectId,
        ref: "Cards",
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
        validate: {
          validator: function (el: number): boolean {
            return el > 0;
          },
          message: "Quantity can't be less then 1! ",
        },
      },
      size: {
        type: String,
      },
    },
  ],
  wishlist: [
    {
      elementId: {
        type: Schema.Types.ObjectId,
        ref: "Cards",
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
        validate: {
          validator: function (el: number): boolean {
            return el > 0;
          },
          message: "Quantity can't be less then 1! ",
        },
      },
      size: {
        type: String,
      },
    },
  ],
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
