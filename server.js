const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { router } = require("./routes/schoolRoute");
const { connect } = require("./models/database");
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
connect();
app.use("/api", router);
app.listen(process.env.PORT, () =>
  console.log(`the server is running in port  ${process.env.PORT}`)
);
