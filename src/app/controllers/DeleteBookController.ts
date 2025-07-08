import { Request, Response } from 'express';
import { bookRepository } from '../../infra/database/repositoryInstace';
import { DeleteBook } from '../../core/usecases/DeleteBook';

export class DeleteBookController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const deleteBook = new DeleteBook(bookRepository);
            await deleteBook.execute(id);

            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({error});
        }
    }

}