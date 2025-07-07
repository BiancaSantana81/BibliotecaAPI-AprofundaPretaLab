import { Book } from '../../src/core/entities/Book';
import { InMemoryBookRepository } from '../../src/infra/database/inMemoryUserRepository';
import { CreateBook } from '../../src/core/usecases/CreateBook';
import { UpdateBorrowStatus } from '../../src/core/usecases/UpdateBorrowStatus';

describe('CreateBook usecase - unit test', () => {

    let bookRepository: InMemoryBookRepository;
    let createBook: CreateBook;
    let updateBook: UpdateBorrowStatus;

    beforeEach(() => {
        bookRepository = new InMemoryBookRepository();
        createBook = new CreateBook(bookRepository);
        updateBook = new UpdateBorrowStatus(bookRepository);
    });

    it("deve atualizar o status do livro para isBorrowed true", async () => {
        const newBook = {
            title: 'Leite do Peito',
            author: 'Gení Guimarães',
            publishedYear: 1992,
        };

        const createdBook = await createBook.execute(newBook);
        await updateBook.execute(createdBook.id);

        expect(bookRepository.books[0].isBorrowed).toBe(true);
    });
});
