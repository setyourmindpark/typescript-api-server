import * as express from 'express';

class UserController {
    
    public users(req: express.Request, res: express.Response, next: express.NextFunction): void {
        res.status(200).json({});
    }

    public create(req: express.Request, res: express.Response, next: express.NextFunction): void{

    }

    public update(req: express.Request, res: express.Response, next: express.NextFunction): void {

    }

    public delete(req: express.Request, res: express.Response, next: express.NextFunction): void {

    }

}

export default new UserController();