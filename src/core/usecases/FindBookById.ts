import { randomUUID } from 'crypto';
import { Book } from '../entities/Book';
import { BookRepository } from '../repositories/BookRepository';

export class FindBookById {
    constructor(private bookRepository: BookRepository) {}

    async execute(bookId:string): Promise<Book | undefined> {

        const foundBook =  await this.bookRepository.findById(bookId);

        if (!foundBook) return undefined;
        return foundBook;
    }
}