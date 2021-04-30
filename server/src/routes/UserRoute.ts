import { Router } from 'express';

import {
  celebrate, Joi, Segments,
} from 'celebrate';

import UserController from '@controllers/UserController';
import ensureAuthenticates from '@middlewares/ensureAuthenticated';

const router: Router = Router();

router
  .route('/user')
  .get(celebrate({
    [Segments.BODY]: Joi.object().keys({
      homeTeam: Joi.string(),
      name: Joi.string(),
      age: Joi.number().integer(),
      height: Joi.number(),
      username: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }), UserController.getUsers)
  .post(UserController.addUser);

router
  .route('/user/:userId')
  .get(celebrate({
    [Segments.PARAMS]: {
      userId: Joi.string().required(),
    },
  }), ensureAuthenticates, UserController.getUser)
  .put(celebrate({
    [Segments.BODY]: Joi.object().keys({
      homeTeam: Joi.string(),
      name: Joi.string(),
      age: Joi.number().integer(),
      height: Joi.number(),
      username: Joi.string(),
      password: Joi.string(),
    }),
    [Segments.PARAMS]: {
      userId: Joi.string().required(),
    },
  }), ensureAuthenticates, UserController.updateUser)
  .delete(celebrate({
    [Segments.PARAMS]: {
      userId: Joi.string().required(),
    },
  }), ensureAuthenticates, UserController.deleteUser);

const UserRoutes: Router = router;

export default UserRoutes;