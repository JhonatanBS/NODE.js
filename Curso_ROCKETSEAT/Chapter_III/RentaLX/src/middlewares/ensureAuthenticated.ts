import { NextFunction, Response, Request } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new Error("Token missing");
  }

  const [, token] = authorization.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "284fda2c-11f6-4853-b07c-f098d0f9b7ed"
    ) as IPayload;

    const userRepository = new UsersRepository();
    const user = userRepository.findById(user_id);

    if (!user) {
      throw new Error("User does not exists!");
    }

    next();
  } catch (error) {
    throw new Error("Invalid token");
  }
}
