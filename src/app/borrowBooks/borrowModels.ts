import { model, Schema } from "mongoose";
import { IBorrow } from "./iBorrowTypes";

const borrowSchema =new Schema<IBorrow>(
    {
        book:{
            type: Schema.Types.ObjectId,
            ref: "Book",
            required: true,
        },
        quantity: {
            type: Number, 
            required: true,
            min: [1, "At least one copy must be borrowed"]
        },
        dueDate: {
            type: Date
        }

    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const BorrowBook = model("BorrowBook", borrowSchema)