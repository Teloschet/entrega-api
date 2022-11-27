import { prisma } from '@prisma/prismaClient';

import { ICreateDelivery } from '@deliveries/interfaces/ICreateDelivery';

export class CreateDeliveryUseCase {
  async execute({ item_name, id_client }: ICreateDelivery) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
      },
    });

    return delivery;
  }
}
