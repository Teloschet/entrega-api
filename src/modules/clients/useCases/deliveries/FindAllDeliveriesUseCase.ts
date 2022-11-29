import { prisma } from '@prisma/prismaClient';

export class FindAllDeliveriesUseCase {
  async execute(id_client: string) {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: id_client,
      },
      include: {
        deliveries: true,
      },
    });

    return deliveries;
  }
}
