import { defineEventHandler, setResponseStatus, readBody } from 'file:///Users/rizwin/rizboo/node_modules/h3/dist/index.mjs';
import mongoose, { Schema } from 'file:///Users/rizwin/rizboo/node_modules/mongoose/index.js';

const UserSchema = new Schema({
  email: String,
  password: String
});
const User = mongoose.model("User", UserSchema);
const users = defineEventHandler(async (event) => {
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

export { users as default };
//# sourceMappingURL=users.mjs.map
