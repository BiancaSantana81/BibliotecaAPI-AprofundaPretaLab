/* Abstração de camada que acessa os dados dos livros em memória (por enquanto, vamos começar a salvar no BD posteriormente */

import { Book } from '../entities/Book';

export interface BookRepository {
    save(book: Book): Promise<void>;
    findById(id: string): Promise<Book | null>;
    findAll(): Promise<Book[]>;
    deleteById(id: string): Promise<void>;
    updateBook(book: Book): Promise<void>;
}