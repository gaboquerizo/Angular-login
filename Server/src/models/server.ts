import express from 'express';


export class Server {
    private app: express.Application;
    private port: string;
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        
    }
    
    listen() {
        this.app.listen(this.port, () => {
            console.log('App running on port',this.port);
        });
    }
}

export default Server;