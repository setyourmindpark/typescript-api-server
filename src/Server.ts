import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as express from 'express';
import UserRouter from './api/user/UserRouter';

export class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.setDefaultHeader();
        this.setDefaultMiddleware(); 
        this.setRouter();       
    }

    private setDefaultHeader() : void {
        // express middleware
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    private setDefaultMiddleware() : void {
        // cors
        this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
            if (req.originalUrl === '/favicon.ico') return;
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS ');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With,' +
                ' Content-Type, Accept,' +
                ' Authorization,' +
                ' Access-Control-Allow-Credentials'
            );
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });  
    }

    private setRouter() : void {
        this.app.use('/users', UserRouter);
    }

}

export default new Server().app;






