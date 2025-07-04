import { Book } from '../../src/core/entities/Book';
import { InMemoryBookRepository } from '../../src/infra/database/inMemoryUserRepository';
import { CreateBook } from '../../src/core/usecases/CreateBook';
import { FindBookById } from '../../src/core/usecases/FindBookById';

describe('FindBook usecase - unit test', () => {
    let bookRepository: InMemoryBookRepository;
    let createBook: CreateBook;
    let findBookById: FindBookById;

    beforeEach(() => {
        bookRepository = new InMemoryBookRepository();
        createBook = new CreateBook(bookRepository);
        findBookById = new FindBookById(bookRepository);
    });

    it("deve encontrar um livro pelo ID", async () => {
        const newBook = {
            title: 'O Segredo das Águas',
            author: 'Gení Guimarães',
            publishedYear: 2001,
            isBorrowed: false,
        };

        const createdBook = await createBook.execute(newBook);
        const foundBook = await findBookById.execute(createdBook.id);

        expect(foundBook).toBeDefined();
        expect(foundBook?.id).toBe(createdBook.id);

    });

    it("deve retornar undefined se o livro não for encontrado", async () => {
        const foundBook = await findBookById.execute('non-existing-id');
        expect(foundBook).toBeUndefined();
    });
});