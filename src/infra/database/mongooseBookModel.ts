import { Schema, model } from "mongoose";

const bookSchema = new Schema ({
    id: {type: String, required: true},
    title: {type: String, required: true},
    author: {type: String},
    publishedYear:  {type: Number},
    isBorrowed:  {type: Boolean, default: false}
});

export const BookModel = model('Book', bookSchema);
