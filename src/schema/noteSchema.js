import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  noteTitle: {
    type: String,
    required: true,
  },
  noteContent: {
    type: String,
    required: true,
  },
  isImportant: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Notes = mongoose.model("Notes", noteSchema);
