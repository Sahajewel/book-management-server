import { model, Schema } from "mongoose";
import { Ibooks } from "./iBookType";

const bookSchema = new Schema<Ibooks>(
    {
        title: {type: String, required: true, trim: true},
        author: {type: String, required: true, trim: true},
        genre: {
            type: String,
            required: true,
            enum: {
                values: [
                   "fiction", "non_fiction" , "science" , "history" ,"biography" , "fantasy"
                ],
                message: "This is not a valid genre"
            }
        },
        isbn: {type: String, required: true, unique: true},
        description: {type: String},
        copies: {type: Number, required: true, min: [0, "Copies must be a positive number"]
         },
         available: {type: Boolean, default: true}

        },
        {versionKey: false, timestamps: true}
    
);

export const Book = model("Book", bookSchema);
