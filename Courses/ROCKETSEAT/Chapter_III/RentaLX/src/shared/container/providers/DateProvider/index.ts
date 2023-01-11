import { container } from "tsyringe";

import "dotenv/config";
import { IDateProvider } from "./IDateProvider";
import { DayjsDateProvider } from "./implementations/DayjsDateProvider";

container.registerSingleton<IDateProvider>(
  "DayjsDateProvider",
  DayjsDateProvider
);
