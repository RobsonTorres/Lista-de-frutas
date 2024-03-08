import { beforeEach, describe, expect, it } from "vitest";
import { prisma } from "../../../database/prisma";
import { getCarList } from "../../mocks/car.mocks";
import { request } from "../../setupFiles";
import { carDefaultExpects } from "../../utils/carDefaultExpects";

describe("get cars", () => {
    beforeEach(async () => {
        const carList = await getCarList();
        await prisma.car.createMany({ data: carList });
    });

    it("should be able to get cars successfully", async () => {
        const data = await request
            .get("/cars")
            .expect(200)
            .then((response) => response.body);

        expect(data).toHaveLength(2);

        carDefaultExpects(data[0]);

        carDefaultExpects(data[1]);

    });

    it("should be able to get a single car by the id correctly", async () => {
        const cars = await prisma.car.findMany();
        
        const data = await request
            .get(`/cars/${cars[1].id}`)
            .expect(200)
            .then((response) => response.body);

        carDefaultExpects(data);
    });

    it("should be throw error when try get a car with a invalid id", async () => {
        const cars = await prisma.car.findMany();

        const id = cars[1].id + 1;

        await request.get(`/cars/${id}`).expect(404);
    }); 
});