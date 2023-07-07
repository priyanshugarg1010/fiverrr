const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const URL = process.env.MONGODB_URL;

const cookieParser = require("cookie-parser");

const userRoute = require("./routes/user.route.js");
const gigRoute = require("./routes/gig.route.js");
const conversationRoute = require("./routes/conversation.route.js");
const messageRoute = require("./routes/message.route.js");
const reviewRoute = require("./routes/review.route.js");
const authRoute = require("./routes/auth.route.js");
const orderRoute = require("./routes/orders.route.js");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://127.0.0.1:5173", credentials: true }));

mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(URL);
    console.log("connected to mongodb");
  } catch (err) {
    console.log(err.message);
  }
};

app.use("/backend/auth", authRoute);
app.use("/backend/users", userRoute);
// app.use("/backend/gig", gigRoute);
// app.use("/backend/conversation", conversationRoute);
// app.use("/backend/review", reviewRoute);
// app.use("/backend/message", messageRoute);
// app.use("/backend/orders", orderRoute);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "you are a bad developer";

  return res.status(errStatus).send(errMessage);
});

app.listen(8800, () => {
  connect();
  console.log("backend is runnig");
});
