import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import '.';
import routes from './routes';
import errorHandler from './src/errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(process.env.PORT);