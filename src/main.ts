import express, { NextFunction, Request, Response } from 'express';
import { route } from './routes';
import bodyParser from 'body-parser'
import { PrismaClient } from '@prisma/client';
import { AppError } from './errors/AppError';

require('dotenv').config({ path: '.env'});

const prisma = new PrismaClient();
prisma.$connect()

//criando backend através do express
const app = express();

app.use(express.json())
//backend usa rota raiz
app.use(route);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        res.status(err.status).json({
            message: err.message
        })
    }

    res.status(500).json({
        message: 'Internal Server Error - ${err.message}'
    })
})

//executa o backend na porta mencionada e após, executa a função callback
app.listen(Number(process.env.PORT), () => {
    console.log('Rodando tá!!!')
})