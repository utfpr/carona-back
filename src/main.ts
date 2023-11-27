import express, { Request, Response } from 'express';
import { indexRouter } from './routes';

const app = express();
const router = express.Router();
const indexRoute = indexRouter;

app.use('/', (req: Request, res: Response) => {
    res.json({
        message:"Rota raiz"
    })
});

app.listen(3333, () => {
    console.log('Foi')
})