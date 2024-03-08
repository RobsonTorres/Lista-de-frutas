import { beforeEach, describe, expect, it } from "vitest";
import { request } from "../../setupFiles";
import { getCarList, invalidDataUpdateCar, updateCar } from "../../mocks/car.mocks";
import { prisma } from "../../../database/prisma";
import { carDefaultExpects } from "../../utils/carDefaultExpects";

describe("update car", () => {
    beforeEach(async () => {
        const carList = await getCarList();
        await prisma.car.createMany({ data: carList });
    });

    it("should be able to update car successfully", async () => {
        const car = await prisma.car.findFirst();

        const data = await request
            .patch(`/cars/${car?.id}`)
            .send(updateCar)
            .expect(200)
            .then((response) => response.body);

        carDefaultExpects(data);

        expect(data.name).toBe(updateCar.name);
        expect(data.description).toBe(updateCar.description);
        expect(data.brand).toBe(updateCar.brand);
        expect(data.year).toBe(updateCar.year);
        expect(data.km).toBe(updateCar.km);   
    });

    it("should throw error when try to update a invalid car", async () => {
        const car = await prisma.car.findMany();

        const id = car[1].id + 1;

        await request
            .patch(`/cars/${id}`)
            .expect(404)
            .then((response) => response.body);
    });

    it("should throw error when try to update a car with invalid data types", async () => {
        const car = await prisma.car.findFirst();

        await request.patch(`/cars/${car?.id}`).send(invalidDataUpdateCar).expect(400);
    })
});