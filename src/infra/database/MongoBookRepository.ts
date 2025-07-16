import { Book } from "../../core/entities/Book";
import { BookRepository } from "../../core/repositories/BookRepository";
import { BookModel } from "./mongooseBookModel";

export class MongoBookRepository  implements BookRepository {
    private toEntity(doc: any):Book {
        return new Book(
            doc._id.toString(),
            doc.title,
            doc.author,
            doc.publishedYear,
            doc.isBorrowed);
    }

    async save(book: Book): Promise<Book> {
        const doc = await BookModel.create(book);
        return this.toEntity(doc);
    }

    async findAll(): Promise<Book[]> {
        const doc = await BookModel.find();
        return doc.map(this.toEntity);
    }

    async findById(id: string): Promise<Book | null> {
        const doc = await BookModel.findOne({ _id : id });

        return doc ? this.toEntity(doc) : null;
    }

    async updateBook(book: Book): Promise<Book> {
        const doc = await BookModel.findByIdAndUpdate(
            book.id,
            {
                title: book.title,
                author: book.author,
                publishedYear: book.publishedYear,
                isBorrowed: book.isBorrowed
            },
            { new: true }
        );
        if (!doc) {
            throw new Error('Book not found');
        }

        return this.toEntity(doc);
    }

    async deleteById(id: string): Promise<void> {
        await BookModel.deleteOne({ _id: id });
    }
}
