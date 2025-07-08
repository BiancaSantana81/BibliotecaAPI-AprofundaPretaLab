import { Request, Response } from 'express';
import { bookRepository } from '../../infra/database/repositoryInstace';
import { UpdateBook } from '../../core/usecases/UpdateBook';

export class UpdateBookController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const book = req.body;

        try {
            const updateBook = new UpdateBook(bookRepository);
            await updateBook.execute(id, book);

            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({error});
        }
    }
}