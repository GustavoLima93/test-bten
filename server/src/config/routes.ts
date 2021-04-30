import { errors } from 'celebrate';

import errorMiddleware from '@middlewares/errors/error';

import UserRoutes from '@routes/UserRoute';
import SessionRoutes from '@routes/SessionRoute';
import MockRoutes from '@routes/MockRoute';

const API = '/api';

export default (app) => {
  app.use(API, SessionRoutes);
  app.use(API, UserRoutes);
  app.use(API, MockRoutes);
  app.use(errors());
  app.use(errorMiddleware);
};