import { InMemoryBookRepository } from '../../src/infra/database/InMemoryBookRepository';
import { CreateBook } from '../../src/core/usecases/CreateBook';
import { DeleteBook } from '../../src/core/usecases/DeleteBook';

describe('DeleteBook usecase - unit test', () => {
    let bookRepository: InMemoryBookRepository;
    let createBook: CreateBook;
    let deleteBook: DeleteBook;

    beforeEach(() => {
        bookRepository = new InMemoryBookRepository();
        createBook = new CreateBook(bookRepository);
        deleteBook = new DeleteBook(bookRepository);
    });

    it("deve deletar um livro em memória", async () => {
        const newBook = {
            title: 'Os Lusíadas',
            author: 'Luís de Camões',
            publishedYear: 1572,
            isBorrowed: false,
        };

        const createdBook = await createBook.execute(newBook);
        const foundBook = await deleteBook.execute(createdBook.id);

        expect(bookRepository.books).toHaveLength(0);
    });

    it ("não deve deletar um livro que não existe", async () => {
        const nonExistentBookId = 'batatinha-1234';
        const result = await deleteBook.execute(nonExistentBookId);
        expect(result).toBeUndefined();
    });
});