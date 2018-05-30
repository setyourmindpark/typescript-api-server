import * as http from 'http';
import * as cluster from 'cluster';
import * as os from 'os';
import Server from './Server';

const numCPUs = os.cpus().length;
const isMaster = cluster.isMaster;
const port : string = env.port;

try {
    const app = Server;

    if (isMaster) {
        cluster.on('online', (worker) => {
            
            
        });
        cluster.on('listening', (worker, address) => {
            // logger.info('created worker [ ' + worker.process.pid + ' ] is listening port : ' + address.port);
            console.log('created worker [ ' + worker.process.pid + ' ] is listening port : ' + address.port)
        });
        cluster.on('exit', (worker, code, signal) => {
            // logger.info('died worker id : ' + worker.process.pid);
            console.log('died worker id : ' + worker.process.pid)
            cluster.fork();
        })
        for (var i = 0; i < numCPUs; i++) {
            cluster.fork();
        }

    } else {
        const apiServer = http.createServer(app).listen(port);
        apiServer.on('error', (err) => {
            throw err;
        });
    }
} catch (err) {
    console.log(err);
    process.exit(1)
}
