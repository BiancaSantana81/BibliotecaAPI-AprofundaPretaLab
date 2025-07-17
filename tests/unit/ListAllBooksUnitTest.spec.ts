import { Book } from '../../src/core/entities/Book';
import { InMemoryBookRepository } from '../../src/infra/database/InMemoryBookRepository';
import { CreateBook } from '../../src/core/usecases/CreateBook';
import { ListBooks } from '../../src/core/usecases/ListBooks';

describe('CreateBook usecase - unit test', () => {

    let bookRepository: InMemoryBookRepository;
    let createBook: CreateBook;
    let allBooks: ListBooks;

    beforeEach(() => {
        bookRepository = new InMemoryBookRepository();
        createBook = new CreateBook(bookRepository);
        allBooks = new ListBooks(bookRepository);
    });

    it("deve retornar uma lista de livros com dois registros", async () => {
        const newBook = {
            title: 'Leite do Peito',
            author: 'Gení Guimarães',
            publishedYear: 1992,
            isBorrowed: false,
        };


        const newBook2 = {
            title: 'Quarto de Despejo',
            author: 'Carolina Maria de Jesus',
            publishedYear: 1960,
            isBorrowed: false
          }

        const createdBook = await createBook.execute(newBook);
        const createdBook2 = await createBook.execute(newBook2);

        const books = await allBooks.execute();

        expect(books).toBeInstanceOf(Array);
        expect(books[0]).toBeInstanceOf(Book);
        expect(books).toHaveLength(2);

    });
});
