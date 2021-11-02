import dotenv from 'dotenv';
if(process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
import express , { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import router from './router/routes';

const APP = express();
APP.use(express.urlencoded({extended: false}));
APP.use(express.json());
APP.use(cors());
APP.use("/control", router);

const PORT = process.env.PORT || 43002;
// 404 endpoint 
APP.use((req:Request, res:Response, next:NextFunction) => {
    res.status(404).json({
        "statusCode": 404,
        "path": req.path,
        "message": "Invalid api endpoint",
    });
})

APP.listen(PORT, () => {
    console.log(`API running on ${PORT}`);
});
// To allow testing, i needed to export the app
export { APP };