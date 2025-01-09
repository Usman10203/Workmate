import mongoose from "mongoose";
import { User } from "../models/user";
// export const connectDb = async () => {
//   try {
//     const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
//       dbName: "work_manager",
//     });

//     console.log("db connected...");
//     // console.log(connection);

//     //testing and ceating new user

//     // const uuser = new User({
//     //   name: "test name",
//     //   email: "test@gmail.com",
//     //   password: "testpassword",
//     //   about: "this is testing",
//     // });

//     // await uuser.save();

//     // console.log("user is created");

//     console.log("connected with host ", connection.host);
//   } catch (error) {
//     console.log("failed  to connect with database");
//     console.log(error);
//   }
// };

export const connectDb = async () => {
  console.log(`DB called`);
  if (mongoose.connection.readyState === 1) {
    console.log('mongoose.connection.readyState', mongoose.connection.readyState);
    console.log("Database is already connected.");
    return;
  }

  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });

    console.log("Database connected...");
    console.log("Connected with host:", connection.host);
  } catch (error) {
    console.error("Failed to connect to the database:");
    console.error(error);
  }
};