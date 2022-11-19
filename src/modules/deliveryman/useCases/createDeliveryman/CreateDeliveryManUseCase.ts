import { ICreateDeliveryman } from '@deliveryman/interfaces/ICreateDeliveryman';

import { prisma } from '@prisma/prismaClient';

import { hash } from 'bcrypt';

export class CreateDeliveryManUseCase {
  async execute({ username, password }: ICreateDeliveryman) {
    // Validar se o usuário existe
    const deliverymanExist = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: 'insensitive',
        },
      },
    });

    if (deliverymanExist) {
      throw new Error('Deliveryman already exists');
    }

    // Criptografar a senha
    const hashPassword = await hash(password, 10);

    // Salvar o deliveryman
    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return deliveryman;
  }
}
