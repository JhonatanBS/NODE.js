import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/CreateRentalController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

export const rentalRoutes = Router();

const createRentalController = new CreateRentalController();

rentalRoutes.post("/", ensureAuthenticated, createRentalController.handle);
