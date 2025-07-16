import { BookRepository } from '../../core/repositories/BookRepository';
import { MongoBookRepository } from './MongoBookRepository';
import { InMemoryBookRepository } from './InMemoryBookRepository';

export function getBookRepository(): BookRepository {
    if (process.env.NODE_ENV === 'test') return new InMemoryBookRepository();
    return new MongoBookRepository();
}
