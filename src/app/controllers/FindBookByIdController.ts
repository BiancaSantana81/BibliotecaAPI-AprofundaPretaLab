import { Request, Response } from 'express';
import { bookRepository } from '../../infra/database/repositoryInstace';
import { FindBookById } from '../../core/usecases/FindBookById';

export class FindBookByIdController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const findBookById = new FindBookById(bookRepository);
            const foundBook = await findBookById.execute(id);

            return res.status(200).json(foundBook);
        } catch (error) {
            return res.status(400).json({error});
        }
    }
}