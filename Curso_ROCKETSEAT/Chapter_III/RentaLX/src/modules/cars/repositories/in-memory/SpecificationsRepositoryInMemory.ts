import { Specification } from "@modules/cars/infra/entities/Specification";

import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

export class SpecificationsRepositoryInMemory
  implements ISpecificationsRepository
{
  specifications: Specification[] = [];

  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = new Specification();

    Object.assign(specification, {
      description,
      name,
    });

    this.specifications.push(specification);
  }
  async findByName(name: string): Promise<Specification> {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }
  async findByIds(ids: string[]): Promise<Specification[]> {
    const allSpecifications = this.specifications.filter((specification) =>
      ids.includes(specification.id)
    );

    return allSpecifications;
  }
}
