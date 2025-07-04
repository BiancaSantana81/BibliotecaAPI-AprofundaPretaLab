import { randomUUID } from 'crypto';
import { Book } from '../entities/Book';
import { BookRepository } from '../repositories/BookRepository';

export interface ICreateBook {
    title: string;
    author: string;
    publishedYear: number;
}


export class CreateBook {
    constructor(private bookRepository: BookRepository) {}

    async execute(newBook:ICreateBook): Promise<Book> {
        if (!newBook.title || !newBook.author || !newBook.publishedYear) {
            throw new Error('Todos os campos são obrigatórios');
        }

        const createdBook = new Book(
            randomUUID(),
            newBook.title,
            newBook.author,
            newBook.publishedYear,
            false // isBorrowed default to false
        );

        await this.bookRepository.save(createdBook);
        return createdBook;
    }
}