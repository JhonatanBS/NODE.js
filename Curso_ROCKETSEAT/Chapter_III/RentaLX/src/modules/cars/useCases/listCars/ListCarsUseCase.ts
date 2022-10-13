import { Car } from "@modules/cars/infra/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

interface IRequest {
  category_id?: string;
  brand?: string;
  name?: string;
}

export class ListCarsUseCase {
  constructor(private listCarsRepository: ICarsRepository) {}

  async execute({ category_id, brand, name }: IRequest): Promise<Car[]> {
    const cars = await this.listCarsRepository.findAvailable(
      brand,
      category_id,
      name
    );
    return cars;
  }
}
