import { Book } from '../entities/Book';

export interface BookRepository {
    save(book: Book): Promise<Book>;
    findById(id: string): Promise<Book | null>;
    findAll(): Promise<Book[]>;
    deleteById(id: string): Promise<void>;
    updateBook(book: Book): Promise<Book>;
}