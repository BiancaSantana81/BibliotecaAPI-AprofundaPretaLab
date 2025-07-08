import { Book } from '../../src/core/entities/Book';
import { InMemoryBookRepository } from '../../src/infra/database/inMemoryUserRepository';
import { CreateBook } from '../../src/core/usecases/CreateBook';
import { UpdateBook } from '../../src/core/usecases/UpdateBook';
import e from 'express';
import { create } from 'domain';

describe('CreateBook usecase - unit test', () => {

    let bookRepository: InMemoryBookRepository;
    let createBook: CreateBook;
    let updateBook: UpdateBook;

    beforeEach(() => {
        bookRepository = new InMemoryBookRepository();
        createBook = new CreateBook(bookRepository);
        updateBook = new UpdateBook(bookRepository);
    });

    it("deve retornar o livro atualizado com as infos passadas para execute", async () => {
        const newBook = {
            title: 'Leite do Peito',
            author: 'Gení Guimarães',
            publishedYear: 1992,
            isBorrowed: false,
        };

        const createdBook = await createBook.execute(newBook);
        await updateBook.execute(createdBook.id, {
            id : createdBook.id,
            title: 'Casa de Alvenaria: Diário de uma Ex-Favelada',
            author: 'Carolina Maria de Jesus',
            publishedYear: 1961,
            isBorrowed: false
          });

        expect(bookRepository.books[0].title).toBe('Casa de Alvenaria: Diário de uma Ex-Favelada');
        expect(bookRepository.books[0].publishedYear).toBe(1961);
    });
});
