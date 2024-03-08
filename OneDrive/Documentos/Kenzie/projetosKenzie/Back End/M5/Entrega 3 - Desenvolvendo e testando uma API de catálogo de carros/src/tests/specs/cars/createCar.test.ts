import { describe, it } from "vitest";
import {
    invalidDataCar,
    car,
} from "../../mocks/car.mocks";
import { request } from "../../setupFiles";

import { carDefaultExpects } from "../../utils/carDefaultExpects";

describe("create car", () => {
    it("should be able to create car sucessfully", async () => {
        const data = await request
            .post("/cars")
            .send(car)
            .expect(201)
            .then((response) => response.body);

        carDefaultExpects(data);
    });

    it("should throw error when try to create a task with a missing body parameter", async () => {
        await request
            .post("/cars")
            .send(invalidDataCar)
            .expect(400)
    });

    it("should throw error when try to create a task with invalid data types", async () => {
        await request
            .post("/cars")
            .send(invalidDataCar)
            .expect(400);
    })
    
})