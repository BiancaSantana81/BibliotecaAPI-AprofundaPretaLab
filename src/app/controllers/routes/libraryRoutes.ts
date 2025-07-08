import { Router } from 'express';
import { CreateBookController } from '../CreateBookController';

const router = Router();

const createBookController = new CreateBookController();

router.post('/create-book', async (req, res) => {
    await createBookController.handle(req, res);
});

export { router as libraryRoutes };