import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/AppError";

export class EnsureMiddleware {
    public validateRequestBody =
        (schema: AnyZodObject) =>
            (req: Request, _:Response, next: NextFunction): void => {
                req.body = schema.parse(req.body);
                return next();
            };
    
    public paramsCarIdExists = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        const { id } = req.params;

        
        const foundCar = await prisma.car.findFirst({
            where: { id }
        });

        if(!foundCar) {
            throw new AppError("Car not found", 404)
        }

        res.locals = { ...res.locals, foundCar}

        return next();
    }
}

export const ensure = new EnsureMiddleware();