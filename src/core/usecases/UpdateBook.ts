import { Book } from '../entities/Book';
import { BookRepository } from '../repositories/BookRepository';

export class UpdateBook {
    constructor(private bookRepository: BookRepository) {}

    async execute(book: Book): Promise<void> { await this.bookRepository.updateBook(book); }
}