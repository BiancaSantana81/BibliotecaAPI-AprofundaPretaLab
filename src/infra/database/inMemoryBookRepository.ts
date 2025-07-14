/* Consultas ao banco de dados - por enquanto usamos memória local, nas próximas aulas vamos usar MongoDB */

import { Book } from '../../core/entities/Book';
import { BookRepository } from '../../core/repositories/BookRepository';

export class InMemoryBookRepository implements BookRepository {
    public books: Book[] = [];

    async save(book: Book): Promise<void> { this.books.push(book); }

    async findById(id: string): Promise<Book | null> {
        const book = this.books.find(b => b.id === id);
        return book || null;
    }

    async findAll(): Promise<Book[]> {
        return this.books;
    }

    async deleteById(id: string): Promise<void> {
        this.books = this.books.filter(b => b.id !== id);
    }

    async updateBook(book: Book): Promise<void> {
        const index = this.books.findIndex(b => b.id === book.id);
        if (index !== -1) this.books[index] = book;
    }
}
