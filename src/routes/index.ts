import express, { Request, Response } from "express"

export const indexRouter = express.Router();
indexRouter.get('/', (req: Request, res: Response) =>{
    res.json({
        title: "Aplicativo de carona"
    })
})