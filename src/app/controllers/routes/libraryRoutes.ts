import { Router } from 'express';
import { CreateBookController } from '../CreateBookController';
import { DeleteBookController } from '../DeleteBookController';
import { FindBookByIdController } from '../FindBookByIdController';

const router = Router();

const createBookController = new CreateBookController();
const deleteBookController = new DeleteBookController();
const findBookByIdController = new FindBookByIdController();

router.post('/create-book', async (req, res) => {
    await createBookController.handle(req, res);
});

router.delete('/delete-book/:id', async (req, res) => {
    await deleteBookController.handle(req, res);
});

router.get('/book/:id', async (req, res) => {
    await findBookByIdController.handle(req, res);
});

export { router as libraryRoutes };