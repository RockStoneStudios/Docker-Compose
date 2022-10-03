import {Router} from 'express';
import {sayHello,getAllUser} from '../controller/user';
const router = Router();

router.get('/',getAllUser);
router.get('/saludo',sayHello);


export default router;