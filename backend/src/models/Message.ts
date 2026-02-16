import mongoose, { Schema, type Document } from "mongoose";

export interface IMessage extends Document {
  chat: mongoose.Types.ObjectId;
  sender: mongoose.Types.ObjectId;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema = new Schema<IMessage>(
  {
    chat: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }, // <--- for Date (createdAt, updatedAt)
);

// --- Indexes for more faster queries
MessageSchema.index({chat: 1, createdAt: 1}); // <--- the oldest one first 
// ( Логика: Самое старое сообщение вверху чата, самое новое сообщение внизу чата)

// --- 1  is ascending order (порядок возрастания)
// --- ( - 1)  is descending order (порядок убывания)

export const Message = mongoose.model("Message", MessageSchema);
