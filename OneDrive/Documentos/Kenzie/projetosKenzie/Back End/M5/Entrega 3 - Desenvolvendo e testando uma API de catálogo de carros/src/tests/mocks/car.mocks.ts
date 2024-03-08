export const car = {
    name: "Lorem ipsum",
    description: "Lorem ipsum",
    brand: "Lorem ipsum",
    year: 123,
    km: 123,
};

export const invalidDataCar = {
    name: 123,
    description: 123,
    brand: 123,
    year: "Lorem ipsum",
    km: "Lorem ipsum",
};

export const updateCar = {
    name: "Update name",
    description: "Update description",
    brand: "Update brand",
    year: 123,
    km: 123,
};

export const invalidDataUpdateCar = {
    name: 123,
    description: 123,
    brand: 123,
    year: "Update year",
    km: "Update km",
};

export const getCarList = async () => {
    return [
        {
            name: "Lorem ipsum",
            description: "Lorem ipsum",
            brand: "Lorem ipsum",
            year: 123,
            km: 123,
        }
    ];
};