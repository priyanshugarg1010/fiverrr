// eslint-disable-next-line no-undef
const mongoose = require("mongoose");
const MessageSchema = new mongoose.Schema(
  {
    conversationID: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", MessageSchema);
