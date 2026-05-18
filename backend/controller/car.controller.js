import Car from "../model/Car.js";
import mongoose from "mongoose";
// post all car
export const sellCar = async (req, res) => {
    try {
        const {
            vehicleData,
            characteristics,
            color,
            vehicleCondition,
            furnishing,
            drive,
            environment,
            picture,
            description,
            price,
            contact
        } = req.body;


        const car = new Car({
            user: req.user.id,
            vehicleData,
            characteristics,
            color,
            vehicleCondition,
            furnishing,
            drive,
            environment,
            picture,
            description,
            price,
            contact
        });

        await car.save();

        return res.status(201).json({
            message: "Car created successfully",
            car: car
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: err.message
        });
    }
}

// update car
export const updateCar = async (req, res) => {
    try {
        const { id } = req.params;

        const car = await Car.findById(id);

        if (!car) {
            return res.status(404).json({ message: "Car not found" });
        }

        // ownership check
        if (car.user.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not allowed" });
        }

        const allowedUpdates = {
            price: "price",
            description: "description",
            brand: "vehicleData.brand",
            model: "vehicleData.model",
            fuelType: "specs.fuelType"
        };

        const updates = {};

        Object.keys(req.body).forEach((key) => {
            if (allowedUpdates[key]) {
                updates[allowedUpdates[key]] = req.body[key];
            }
        });

        const updatedCar = await Car.findByIdAndUpdate(
            id,
            { $set: updates },
            { new: true }
        );

        res.status(200).json({
            message: "Car updated",
            car: updatedCar
        });

    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// delete car
export const deleteCar = async (req, res) => {

}

// my listing
export const myAllCars = async (req, res) => {

}


export const getFilterCar = async (req, res) => {
    try {
        const { brand, model, priceFrom, priceTo, registrationFrom, registrationTo } = req.query;

        const query = {};

        // brand filter
        if (brand && brand !== "") {
            query["vehicleData.brand"] = brand;
        }

        // model filter
        if (model && model !== "") {
            query["vehicleData.model"] = model;
        }

        // price filter
        if (priceFrom || priceTo) {
            query.price = {};

            if (priceFrom) {
                query.price.$gte = Number(priceFrom);
            }

            if (priceTo) {
                query.price.$lte = Number(priceTo);
            }
        }

        // registration filter
        if (registrationFrom || registrationTo) {
            query["vehicleCondition.registration"] = {};

            if (registrationFrom) {
                query["vehicleCondition.registration"].$gte = Number(registrationFrom);
            }

            if (registrationTo) {
                query["vehicleCondition.registration"].$lte = Number(registrationTo);
            }
        }

        const findCars = await Car.find(query);

        res.status(200).json({
            message: "Car Successfully Fetch",
            count: findCars.length,
            cars: findCars
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

// find single car
export const getSingleCar = async (req, res) => {
    try {
        const { id } = req.params; // ✅ correct
        // optional but recommended
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid ID"
            });
        }

        const findCar = await Car.findById(id); // ✅ correct

        if (!findCar) {
            return res.status(404).json({
                message: "Car not found"
            });
        }

        res.status(200).json(
            {
                message: "Car Data SuccessFully",
                car: findCar
            }
        )


    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Serve Error"
        })
    }
}