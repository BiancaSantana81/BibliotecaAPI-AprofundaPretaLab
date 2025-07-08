import { Request, Response } from 'express';
import { bookRepository } from '../../infra/database/repositoryInstace';
import { ListBooks} from '../../core/usecases/ListBooks';
import { Book } from '../../core/entities/Book';

export class ListAllBooksController {
    async handle(req: Request, res: Response): Promise<Response> {

        try {
            const listAllBooks = new ListBooks(bookRepository);
            const allBooks:Book[] = await listAllBooks.execute();

            return res.status(200).json(allBooks);
        } catch (error) {
            return res.status(400).json({error});
        }
    }
}