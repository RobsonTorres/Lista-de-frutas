import "express-async-errors";
import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import { handleErrors } from "./middlewares/ErrorsMiddleware";
import { carRouter } from "./routes/CarRouter";

const app = express();

app.use(cors());

app.use(helmet());
app.use(json());

app.use("/cars", carRouter);

app.use(handleErrors)

export default app