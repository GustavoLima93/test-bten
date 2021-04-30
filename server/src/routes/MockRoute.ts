import { Router } from 'express';
import MockController from '@controllers/MockController';
import ensureAuthenticates from '@middlewares/ensureAuthenticated';

const router: Router = Router();

router
  .route('/mock')
  .get(ensureAuthenticates, MockController.getMock);

const MockRoutes: Router = router;

export default MockRoutes;