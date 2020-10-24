  
import express from "express";
import "express-async-errors";
import cors from "cors";

import path from "path";
import { errorHandler } from "./erros/handler";

import "./database/connection";

import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.use(routes);

app.use(errorHandler);

app.listen(process.env.PORT||3333, () => console.log("Server is running on port 3333"));