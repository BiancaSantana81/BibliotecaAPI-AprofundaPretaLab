import { Router } from 'express';
import { CreateBookController } from '../CreateBookController';
import { DeleteBookController } from '../DeleteBookController';

const router = Router();

const createBookController = new CreateBookController();
const deleteBookController = new DeleteBookController();

router.post('/create-book', async (req, res) => {
    await createBookController.handle(req, res);
});

router.delete('/delete-book/:id', async (req, res) => {
    await deleteBookController.handle(req, res);
});

export { router as libraryRoutes };