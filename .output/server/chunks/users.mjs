import { d as defineEventHandler, r as readBody } from './nitro/node-server.mjs';
import mongoose, { Schema } from 'mongoose';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const UserSchema = new Schema({
  email: String,
  password: String
});
const User = mongoose.model("User", UserSchema);
const users = defineEventHandler(async (event) => {
  try {
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

export { users as default };
//# sourceMappingURL=users.mjs.map
