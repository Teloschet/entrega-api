import { hash } from 'bcrypt';

import { prisma } from '@prisma/prismaClient';
import { ICreateClient } from '@clients/interfaces/ICreateClient';

export class CreateClientUseCase {
  async execute({ password, username }: ICreateClient) {
    // Validar se o usuário existe
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          mode: 'insensitive',
        },
      },
    });

    if (clientExist) {
      throw new Error('Client already exists');
    }

    // Criptografar a senha
    const hashPassword = await hash(password, 10);

    // Salvar o cliente
    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return client;
  }
}
