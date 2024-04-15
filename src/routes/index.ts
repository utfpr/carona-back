import express, { Request, Response } from "express"
import { mainRouter } from "./mainRoute"
import { userRoute } from "./userRoute";
import { carRoute } from "./carRoute";
import { raceRoute } from "./raceRoute";
import { userAuthenticateRoute } from "./authRoute";

export const route = express.Router();

route.use('/', mainRouter);
route.use('/user', userRoute);
route.use('/car', carRoute);
route.use('/race',raceRoute );
route.use('/auth', userAuthenticateRoute)