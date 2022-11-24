import { Request, Response } from 'express';
import { CreateDeliveryManUseCase } from './CreateDeliveryManUseCase';

export class CreateDeliveryManController {
  async handle(req: Request, res: Response) {
    // Pega as requisições da rota
    const { username, password } = req.body;

    // Chama a classe do useCase que foi criado
    const createDeliveryManUseCase = new CreateDeliveryManUseCase();
    // Executa o useCase
    const result = await createDeliveryManUseCase.execute({
      username,
      password,
    });

    // Retorna os dados do useCase que foram cadastrados no banco via json
    return res.json(result);
  }
}
