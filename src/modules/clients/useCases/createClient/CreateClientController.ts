import { Request, Response } from 'express';

import { CreateClientUseCase } from './CreateClientUseCase';

export class CreateClientController {
  async handle(req: Request, res: Response) {
    // Pega as requisições da rota
    const { username, password } = req.body;

    // Chama a classe do useCase que foi criado
    const createClientUseCase = new CreateClientUseCase();
    // Executa o useCase
    const result = await createClientUseCase.execute({
      username,
      password,
    });

    // Retorna os dados do useCase que foram cadastrados no banco via json
    return res.json(result);
  }
}
