import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListRentalsUserByUseCase } from "./ListRentalsByUserUseCase";

export class ListRentalsByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listRentalsUserUseCase = container.resolve(ListRentalsUserByUseCase);

    const rentals = await listRentalsUserUseCase.execute(id);

    return response.json(rentals);
  }
}
