import { Schema } from "mongoose";
import mongoose from "mongoose";

const UserSchema = new Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

export default defineEventHandler(async (event) => {
  try {
    setResponseStatus(event, 207);
    const body = await readBody(event);
    if (body.room === "") {
      return "ERR404";
    }
    const roomCode = body.room;
    const users = await User.findOne({ code: `${roomCode}` });
    let clone = { ...users };
    return clone._doc.available;
    console.log("try complete");
  } catch (error) {
    console.log("ERR:", error);
  }
});
