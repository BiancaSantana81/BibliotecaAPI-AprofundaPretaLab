import { Book } from '../entities/Book';
import { BookRepository } from '../repositories/BookRepository';

export class ListBooks {
    constructor(private bookRepository: BookRepository) {}

    async execute(): Promise<Book[]> {

        const allBooks:Book[] =  await this.bookRepository.findAll();

        return allBooks;
    }
}