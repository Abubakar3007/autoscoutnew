import fs from "fs";
import Car from "../model/Car.js";

const importCars = async () => {
    try {
        const data = fs.readFileSync("../car.json", "utf-8");
        const cars = JSON.parse(data);

        await Car.insertMany(cars);

        console.log("1000 Cars Imported Successfully");

    } catch (error) {
        console.log(error);
    }
};

importCars();