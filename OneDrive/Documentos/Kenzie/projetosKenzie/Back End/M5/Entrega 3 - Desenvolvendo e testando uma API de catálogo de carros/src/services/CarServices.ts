import { prisma } from "../database/prisma";
import { CarCreate, CarReturn, CarUpdate } from "../interfaces/car.interface";
import { CarSchemaType, carReturnSchema, carSchema } from "../schemas/CarSchema";
import { AppError } from "../errors/AppError";
import { Car } from "@prisma/client";


export class CarService {
    public create = async (payload: CarCreate): Promise<CarSchemaType> => {
        const data = await prisma.car.create({ data: payload })

        return carSchema.parse(data);
    };

    public findMany = async (): Promise<Car[]> => {
        const data = await prisma.car.findMany()
        
        return data;
    };

    public findOne = async (id: string) => {

        const foundCar = await prisma.car.findFirst({
            where: { id },
        })

            if(foundCar === null) {
                throw new AppError("Car not found", 404)
            }

        return await prisma.car.findFirst({
            where: { id },
        });
    };

    public partialUpdate = async (carId: string, body: CarUpdate): Promise<CarSchemaType> => {
        const data = await prisma.car.update({
            data: body,
            where: { id: carId }
        });

        return carSchema.parse(data);
    }
}
