import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListCarsAvailableController } from "@modules/cars/useCases/listAvailableCars/ListCarsAvailableController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

export const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListCarsAvailableController();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carsRoutes.get("/available", listAvailableCarsController.handle);
