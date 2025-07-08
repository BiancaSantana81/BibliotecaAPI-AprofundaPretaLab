import express from 'express';
import { libraryRoutes} from '../../app/routes/controllers/libraryRoutes';

const app = express();
app.use(express.json());

app.use('/api/library', libraryRoutes);

export default app;