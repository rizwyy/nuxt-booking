import mongoose from "mongoose";
import { Nitro } from "nitro:pack";

export default async (_nitroApp: Nitro) => {
  const config = useRuntimeConfig();
  try {
    console.log("running ✅");
    await mongoose.connect(config.DB);

    console.log("connected 🟢");
  } catch (error) {
    console.log("something went wrong 🔴");
    console.log(error);
  }
};
