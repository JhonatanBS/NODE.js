import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsAvailableUseCase } from "./ListCarsAvailableUseCase";

let listCarsAvailableUseCase: ListCarsAvailableUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsAvailableUseCase = new ListCarsAvailableUseCase(
      carsRepositoryInMemory
    );
  });

  it("Should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car description",
      daily_rate: 80.0,
      license_plate: "ABC-4714",
      fine_amount: 40.0,
      brand: "Car_Brand",
      category_id: "category_id",
    });

    const cars = await listCarsAvailableUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car description",
      daily_rate: 80.0,
      license_plate: "ABC-4714",
      fine_amount: 40.0,
      brand: "Car_Brand_test",
      category_id: "category_id",
    });

    const cars = await listCarsAvailableUseCase.execute({
      brand: "Car_Brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car description",
      daily_rate: 80.0,
      license_plate: "ABC-471456",
      fine_amount: 40.0,
      brand: "Car_Brand_test",
      category_id: "category_id",
    });

    const cars = await listCarsAvailableUseCase.execute({ name: "Car3" });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car description",
      daily_rate: 80.0,
      license_plate: "ABC-12345",
      fine_amount: 40.0,
      brand: "Car_Brand_test",
      category_id: "12345",
    });

    const cars = await listCarsAvailableUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
