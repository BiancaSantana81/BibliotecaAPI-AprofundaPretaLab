import { Book } from '../entities/Book';
import { BookRepository } from '../repositories/BookRepository';

export class UpdateBorrowStatus{
    constructor(private bookRepository: BookRepository) {}

    async execute(id:string): Promise<void> {

        const statusBook = await this.bookRepository.findById(id);
        if (!statusBook) throw new Error('Book not found');
        statusBook.isBorrowed = !statusBook.isBorrowed;

        console.log("status do livro: ", statusBook.isBorrowed);

        await this.bookRepository.updateBook(statusBook);
    }
}