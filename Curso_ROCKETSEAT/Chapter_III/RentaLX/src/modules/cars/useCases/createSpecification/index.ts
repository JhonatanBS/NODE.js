import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateEspecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateEspecificationUseCase(
  specificationsRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
