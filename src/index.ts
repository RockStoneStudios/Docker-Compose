import express,{Application} from 'express';
import dotenv from 'dotenv';
import userRouter from './router/user';
import db from './DB/connection';

class Server {
    private app:Application;
    private port : number;
    private api = {
        user : '/api/users'
    }

    constructor(){
        dotenv.config();
        
         console.log(process.env.DB_HOST);
        this.app = express();
        this.port = parseInt(<string>process.env.PORT);
        this.Router();
        this.Listen();
        this.DbInithialize();
    }
    
     public Middlewares() {
        this.app.use(express.json());
     }
    public Listen() {
        this.app.listen(this.port,()=>{
            console.log(`Starting Server on Port --> ${this.port} .`);
           
        });
    }

    public DbInithialize () {
        db.sync().then(()=> console.log('Database Connected Successful'))
        .catch((error :any) => console.log(error));
    }

    public Router () {
        this.app.use(this.api.user,userRouter);
    }
}

new Server();

