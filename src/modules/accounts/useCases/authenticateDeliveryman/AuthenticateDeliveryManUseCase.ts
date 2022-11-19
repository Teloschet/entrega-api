import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { prisma } from '@prisma/prismaClient';
import { IAuthenticateDeliveryMan } from '@accounts/interfaces/IAuthenticateDeliveryMan';

export class AuthenticateDeliveryManUseCase {
  async execute({ username, password }: IAuthenticateDeliveryMan) {
    // Receber username, password

    // Verificar se username cadastrado
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error('Username or password invalid!');
    }

    // Verificar se senha corresponde ao username
    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error('Username or password invalid!');
    }

    // Gerar o token
    const jwtSecret = process.env.JWT_SECRET;
    const token = sign({ username }, `${jwtSecret}`, {
      subject: deliveryman.id,
      expiresIn: '1d',
    });

    return token;
  }
}
