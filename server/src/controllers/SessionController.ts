import { Request, Response } from 'express';

import AuthenticateUserService from '@services/AuthenticateUserService';
import User from '@models/User';

interface Session {
  user: User;
  token: string;
}

class SessionController {
  async getSessions(req: Request, res: Response) {
    try {
      const session: Session = await AuthenticateUserService.getSession(req.body);
      return res.status(200).json(session);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new SessionController();