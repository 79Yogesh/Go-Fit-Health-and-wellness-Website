import mongoose, { Schema } from "mongoose";

const customerSchema = new Schema({

    "name":String,
    "phone":Number,
    "slot": Number,
    "carnumber":Number
});

export const Customer=mongoose.model("customer", customerSchema);