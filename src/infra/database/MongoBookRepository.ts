import { Book } from "../../core/entities/Book";
import { BookRepository } from "../../core/repositories/BookRepository";
import { BookModel } from "./mongooseBookModel";

export class MongoBookRepository  implements BookRepository {
    private toEntity(doc: any):Book {
        return new Book(doc.title, doc.author, doc.publishedYear, doc.isBorrowed, doc._id);
    }

    async save(book: Book): Promise<Book> {
        const newBook = await BookModel.create(book);
        return this.toEntity(newBook);
    }
}
