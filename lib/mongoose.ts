import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectedToDatabase = async () => {
  mongoose.set("strictQuery", true);
  //   The above line is going to prevent unknown field queries

  if (!process.env.MONGODB_URL) {
    return console.log("MISSING MONGODB_URL");
  }

  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devflow",
    });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};
