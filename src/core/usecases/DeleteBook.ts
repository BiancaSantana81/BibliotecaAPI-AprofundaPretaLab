import { BookRepository } from '../repositories/BookRepository';

export class DeleteBook {
    constructor(private bookRepository: BookRepository) {}

    async execute(bookId:string): Promise<void> {
        const book = await this.bookRepository.findById(bookId);
        if (!book) return undefined;

        await this.bookRepository.deleteById(bookId);
    }
}