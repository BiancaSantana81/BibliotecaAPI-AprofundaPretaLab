import { Request, Response } from 'express';
import { bookRepository } from '../../infra/database/repositoryInstace';
import { UpdateBorrowStatus } from '../../core/usecases/UpdateBorrowStatus';

export class UpdateBorrowStatusController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const updateBook = new UpdateBorrowStatus(bookRepository);
            await updateBook.execute(id);

            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({error});
        }
    }
}