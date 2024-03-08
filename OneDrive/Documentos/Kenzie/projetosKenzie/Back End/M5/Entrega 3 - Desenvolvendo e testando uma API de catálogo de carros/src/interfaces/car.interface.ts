import { Car } from "@prisma/client";
import { z } from "zod";
import { carReturnSchema } from "../schemas/CarSchema";

type CarCreate = Omit<Car, "id">;
type CarUpdate = Omit<Car, "id">;
type CarReturn = z.infer<typeof carReturnSchema>;

export { CarCreate, CarReturn, CarUpdate };