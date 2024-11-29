import express, { urlencoded } from "express";
import userModel from "./models/crudmodel.js";
import web from "./routes/web.js";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import bodyParser from "body-parser";
const app = express();
const port = process.env.PORT || "3000";
const DATABASE_URL = "mongodb://127.0.0.1:27017";

app.use(cors());

app.use(bodyParser.json());

app.use("/", web);

app.use(express.json());

connectDB(DATABASE_URL);

// app.use(urlencoded());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
