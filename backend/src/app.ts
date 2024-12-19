import "express-async-errors";
import "dotenv/config";
import { errorHandler } from "./error";
import countryRouter from "./routes/country.routes";
import cors from "cors";

import express from "express";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/countries", countryRouter);

app.use(errorHandler);
export default app;
