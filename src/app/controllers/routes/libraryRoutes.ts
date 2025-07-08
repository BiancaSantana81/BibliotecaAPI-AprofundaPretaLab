import { Router } from 'express';
import { CreateBookController } from '../CreateBookController';
import { DeleteBookController } from '../DeleteBookController';
import { FindBookByIdController } from '../FindBookByIdController';
import { ListAllBooksController } from '../ListAllBooksController';
import { UpdateBorrowStatusController } from '../UpdateBorrowStatusController';
import { UpdateBookController } from '../UpdateBookController';

const router = Router();

const createBookController = new CreateBookController();
const deleteBookController = new DeleteBookController();
const findBookByIdController = new FindBookByIdController();
const listAllBooksController = new ListAllBooksController();
const updateBookController = new UpdateBookController();
const updateBorrowStatusController = new UpdateBorrowStatusController();

router.post('/create-book', async (req, res) => {
    await createBookController.handle(req, res);
});

router.delete('/delete-book/:id', async (req, res) => {
    await deleteBookController.handle(req, res);
});

router.get('/book/:id', async (req, res) => {
    await findBookByIdController.handle(req, res);
});

router.get('/books', async (req, res) => {
    await listAllBooksController.handle(req, res);
});

router.put('/update-book/:id', async (req, res) => {
    await updateBookController.handle(req, res);
});

router.patch('/update-borrow/:id', async (req, res) => {
    await updateBorrowStatusController.handle(req, res);
});

export { router as libraryRoutes };