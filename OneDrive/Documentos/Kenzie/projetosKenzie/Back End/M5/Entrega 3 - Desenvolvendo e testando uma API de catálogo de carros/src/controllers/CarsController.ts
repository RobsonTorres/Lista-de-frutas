import { Request, Response } from "express";
import { CarService } from "../services/CarServices";


export class CarController {

    public create = async (req: Request, res: Response): Promise<Response> => {
        const carService: CarService = new CarService();

        const newCar = await carService.create(req.body);
        return res.status(201).json(newCar);
    }

    public read = async (req: Request, res: Response): Promise<Response> => {
        const carService: CarService = new CarService();

        const response = await carService.findMany();
        return res.status(200).json(response);
    }

    public retrieve = async (req: Request, res: Response): Promise<Response> => {
        const carService: CarService = new CarService();

        const foundCar = req.params.id;
        const car = await carService.findOne(foundCar);
        return res.status(200).json(car);
    }

    public partialUpdate = async (req: Request, res: Response) => {
        const carService: CarService = new CarService();

        const car = await carService.partialUpdate(String(req.params.id), req.body);
        return res.status(200).json(car);
    }
}