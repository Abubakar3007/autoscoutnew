import express from "express";
import { sellCar, getSingleCar, getFilterCar, updateCar } from "../controller/car.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/car/sell-car", authMiddleware, sellCar);
router.get("/car/", getFilterCar);
router.get("/car/:id", getSingleCar);
router.get("/car/:id", updateCar);
export default router;