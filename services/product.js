"use client";
import { useMemo } from "react";
import cars from "../backend/car.json";

export const allCarsData = async () => {
    try {
        return cars;
    } catch (error) {
        console.log("Error fetching cars data:", error);
        return [];
    }
};

// find single car from id
export const findSingleCar = (id) => {
    return cars.find((item) => item.id === id);
}

// filter for cars
export const filterByForm = (
    brand,
    model,
    priceFrom,
    priceTo,
    registrationFrom,
    registrationTo
) => {

    // agar koi bhi filter select nahi hua
    if (
        !brand &&
        !model &&
        !priceFrom &&
        !priceTo &&
        !registrationFrom &&
        !registrationTo
    ) {
        return cars; // saari cars return karo
    }

    const findCars = cars.filter((car) => {
        return (
            (!brand || car.brand === brand) &&
            (!model || car.model === model) &&
            (!priceFrom || car.price >= Number(priceFrom)) &&
            (!priceTo || car.price <= Number(priceTo)) &&
            (!registrationFrom || car.registration >= Number(registrationFrom)) &&
            (!registrationTo || car.registration <= Number(registrationTo))
        );
    });

    return findCars;
};

// find similar cars
export const similarCars = async (brand) => {
    const data = cars.filter((item) => item.brand === brand).slice(0, 4);
    return data;
}
