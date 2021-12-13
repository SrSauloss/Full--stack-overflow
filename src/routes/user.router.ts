import { Router } from 'express';
import { storeUser } from '../controllers/user.controller';

const userRouter = new (Router as any)();

userRouter.post('/users', storeUser);

export default userRouter;
