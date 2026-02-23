import mongoose, { mongo } from "mongoose";
import { User } from "../models/User";

const SEED_USERS = [
  {
    clerkId: "seed_user_1",
    name: "Alice Smuseva",
    email: "alice@example.com",
    avatar: "https://i.pravatar.cc/150?img=16",
  },
  {
    clerkId: "seed_user_2",
    name: "Anna Smuseva",
    email: "annnna@example.com",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    clerkId: "seed_user_3",
    name: "Andrey Paschenko",
    email: "pashcenko@example.com",
    avatar: "https://i.pravatar.cc/150?img=14",
  },
  {
    clerkId: "seed_user_4",
    name: "Alex Remizov",
    email: "remiv@example.com",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    clerkId: "seed_user_5",
    name: "Samat Adilov",
    email: "adilov@example.com",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    clerkId: "seed_user_6",
    name: "Anton Usenko",
    email: "usenkooo@example.com",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    clerkId: "seed_user_7",
    name: "Mark Markin",
    email: "mmarkmmarkin@example.com",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    clerkId: "seed_user_8",
    name: "Angelina Dudchenko",
    email: "angel@example.com",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    clerkId: "seed_user_9",
    name: "Sergey Ryabinin",
    email: "ryaba@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    clerkId: "seed_user_10",
    name: "Daniel Tkachenko",
    email: "tkachdanik@example.com",
    avatar: "https://i.pravatar.cc/150?img=14",
  },
];

async function seed() {
  try {
    const mongoURI =
      process.env.MONGODB_URI || "mongodb://localhost:27017/chat-app";
    await mongoose.connect(mongoURI);

    // --- Insert seed users ---
    const users = await User.insertMany(SEED_USERS);
    console.log(`+ Seeded ${users.length} users:`);
    users.forEach((user) => {
      console.log(` - ${user.name} ${user.email}`);
    });

    await mongoose.disconnect();
    console.log("+++ Done!");
    process.exit(0);
  } catch (error) {
    console.error("- Seed error:", error);
    process.exit(1);
  }
}

seed();
