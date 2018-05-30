import { Router } from 'express';
import UserController from './UserController';

class UserRouter {
    public router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    private routes(){
        this.router.get('/', UserController.users);
        this.router.post('/', UserController.create);
        this.router.put('/{id}', UserController.update);
        this.router.delete('/{id}', UserController.delete);
    }
}

export default new UserRouter().router;