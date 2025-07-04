import { Book } from '../../src/core/entities/Book';
import { InMemoryBookRepository } from '../../src/infra/database/inMemoryUserRepository';
import { CreateBook } from '../../src/core/usecases/CreateBook';

describe('CreateBook usecase - unit test', () => {

    let bookRepository: InMemoryBookRepository;
    let createBook: CreateBook;

    beforeEach(() => {
        bookRepository = new InMemoryBookRepository();
        createBook = new CreateBook(bookRepository);
    });

    it("deve criar um livro com sucesso", async () => {
        const newBook = {
            title: 'A Amiga Genial',
            author: 'Elena Ferrante',
            publishedYear: 2011,
            isBorrowed: false,
        };

        const createdBook = await createBook.execute(newBook);

        expect(createdBook).toBeInstanceOf(Book);
        expect(bookRepository.books).toHaveLength(1);
        expect(bookRepository.books[0].title).toBe(newBook.title);

    });

    it("deve lançar um erro se o título do livro não for fornecido", async () => {
        const newBook = {
            title: '',
            author: 'Gení Guimarães',
            publishedYear: 1992,
            isBorrowed: false,
        };

        await expect(createBook.execute(newBook))
            .rejects
            .toThrow('Todos os campos são obrigatórios');
    });

});
