import { Request, Response } from 'express';
import { bookRepository } from '../../infra/database/repositoryInstace';
import { CreateBook } from '../../core/usecases/CreateBook';

export class CreateBookController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { title, author, publishedYear } = req.body;

        try {
            const createBook = new CreateBook(bookRepository);
            const book = await createBook.execute({ title, author, publishedYear });

            return res.status(201).json({
                id: book.id,
                title: book.title,
                author: book.author,
                publishedYear: book.publishedYear,
                isBorrowed: book.isBorrowed

            });
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    }

}