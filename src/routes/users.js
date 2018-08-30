import { Router }  from 'express';
import usersController from '../controllers/usersController';
import { catchAsync }  from '../middlewares/errors';

export default () => {
    const api = Router();

    api.post('/', catchAsync(usersController.create));
    api.get('/', catchAsync(usersController.get));

    return api;
}