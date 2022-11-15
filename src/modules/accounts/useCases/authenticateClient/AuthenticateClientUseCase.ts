import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { prisma } from "../../../../database/prismaClient";
import { IAuthenticateClient } from "../../interfaces/IAuthenticateClient";

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    // Receber username, password

    // Verificar se username cadastrado 
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    })

    if (!client) {
      throw new Error("Username or password invalid!");
    }

    // Verificar se senha corresponde ao username
    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    // Gerar o token
    const jwtSecret = process.env.JWT_SECRET;
    const token = sign({ username }, `${jwtSecret}`, {
      subject: client.id,
      expiresIn: "1d"
    });

    return token;
  }
}