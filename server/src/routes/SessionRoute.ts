import { Router } from 'express';
import {
  celebrate, Joi, Segments,
} from 'celebrate';
import SessionController from '@controllers/SessionController';

const router: Router = Router();

router
  .route('/session')
  .post(celebrate({
    [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }), SessionController.getSessions);

const SessionRoutes: Router = router;

export default SessionRoutes;