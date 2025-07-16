import express from 'express';
import { libraryRoutes} from '../../app/controllers/routes/libraryRoutes';

import { connectMongo } from '../database/mongooseConnection';

const app = express();
app.use(express.json());

app.use('/api/library', libraryRoutes);

const URI = process.env.MONGO_URI;

if (!URI) {
  throw new Error('A variável MONGO_URI não está definida!');
}

connectMongo(URI);

export default app;