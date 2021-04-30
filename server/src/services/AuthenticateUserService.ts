import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '@models/User';
import authConfig from '@config/auth';

interface Session {
  username: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async getSession({ username, password }: Session): Promise<Response> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { username } });

    if (!user) {
      throw new Error('Incorrect username/password combination');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect username/password combination');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    delete user.password;

    return {
      user,
      token,
    };
  }
}

export default new AuthenticateUserService();