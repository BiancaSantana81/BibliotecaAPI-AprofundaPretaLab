import { Book } from '../entities/Book';
import { BookRepository } from '../repositories/BookRepository';

export class UpdateBook {
    constructor(private bookRepository: BookRepository) {}

    async execute(id: string, book: Book): Promise<Book> {
        const foundBook = await this.bookRepository.findById(id);
        if (!foundBook) throw new Error('Book not found');

        foundBook.title = book.title;
        foundBook.author = book.author;
        foundBook.publishedYear = book.publishedYear;

        const updated = await this.bookRepository.updateBook(foundBook);
        return updated;
    }
}