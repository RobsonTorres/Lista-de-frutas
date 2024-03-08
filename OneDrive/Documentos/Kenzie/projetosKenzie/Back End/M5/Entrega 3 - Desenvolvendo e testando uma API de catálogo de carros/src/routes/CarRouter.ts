import { Router } from "express";
import { EnsureMiddleware } from "../middlewares/EnsureMiddleware";
import { carCreateSchema, carUpdateSchema } from "../schemas/CarSchema";
import { CarController } from "../controllers/CarsController";

export const carRouter = Router();

const carController = new CarController();

const ensureMiddleware = new EnsureMiddleware();

carRouter.post(
    "/",
    ensureMiddleware.validateRequestBody(carCreateSchema),
    carController.create
);

carRouter.get(
    "/",
    carController.read
);

carRouter.get(
    "/:id",
    ensureMiddleware.paramsCarIdExists,
    carController.retrieve
);

carRouter.patch(
    "/:id",
    ensureMiddleware.validateRequestBody(carUpdateSchema),
    ensureMiddleware.paramsCarIdExists,
    carController.partialUpdate
);

carRouter.delete(
    "/:id",
    // carController.delete
    
    );