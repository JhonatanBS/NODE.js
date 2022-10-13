import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCarsAvailableUseCase } from "./ListCarsAvailableUseCase";

export class ListCarsAvailableController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { brand, category_id, name } = request.query;

    const listAvailableCarsUseCase = container.resolve(
      ListCarsAvailableUseCase
    );

    const cars = await listAvailableCarsUseCase.execute({
      brand: brand as string,
      name: name as string,
      category_id: category_id as string,
    });

    return response.json(cars);
  }
}
