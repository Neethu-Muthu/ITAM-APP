const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const assetRoutes = require("./routes/assetRoutes");
const authRoute = require("./routes/auth");
const cookieParser = require("cookie-parser");
const Maintenance = require("./models/Maintenance");


app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);


app.use("/", assetRoutes);
app.use("/", authRoute)
app.use("/", Maintenance)

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect("mongodb://localhost:27017/DataStore");

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
