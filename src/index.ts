import express from "express";
import mongoose from "mongoose";
import cors from "cors";
require("dotenv").config();
import todoRouter from "./routes/todo.route";

const app = express();
const PORT = process.env.PORT;
const mongoString = process.env.DB_URL!;
const database = mongoose.connection;

app.use(express.json());

app.use("/", todoRouter);

mongoose.connect(mongoString);

app.listen(PORT, () => {
  console.log(`=================================`);
  console.log(` App listening on the port ${PORT}`);
});

// app.use(cors({ origin: "*", credentials: true }));

database.once("connected", () => {
  console.log("===== Connected to Database =====");
});

database.on("error", (error: any) => {
  console.log(error);
});
