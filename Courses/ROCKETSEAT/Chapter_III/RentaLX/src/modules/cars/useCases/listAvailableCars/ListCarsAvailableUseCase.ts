import { inject, injectable } from "tsyringe";

import { Car } from "@modules/cars/infra/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

interface IRequest {
  category_id?: string;
  brand?: string;
  name?: string;
}

@injectable()
export class ListCarsAvailableUseCase {
  constructor(
    @inject("CarsRepository")
    private listCarsRepository: ICarsRepository
  ) {}

  async execute({ category_id, brand, name }: IRequest): Promise<Car[]> {
    const cars = await this.listCarsRepository.findAvailable(
      brand,
      category_id,
      name
    );
    return cars;
  }
}
