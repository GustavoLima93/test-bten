import { DeleteResult, getRepository, Repository } from 'typeorm';
import User from '@models/User';
import dayjs from 'dayjs';
import { hash } from 'bcryptjs';

class UserService {
  async getUsers() {
    const userRepository: Repository<User> = getRepository(User);
    const users: User[] = await userRepository.find();

    return users;
  }

  async getUser(userId: string) {
    const userRepository: Repository<User> = getRepository(User);
    const user: User = await userRepository.findOne(userId);

    return user;
  }

  async addUser(user: User) {
    const userRepository: Repository<User> = getRepository(User);

    const checkUserExists = await userRepository.findOne({
      where: { username: user.username },
    });

    if (checkUserExists) {
      throw new Error('username already used.');
    }

    const hashedPassword = await hash(user.password, 8);

    const userSave: User = { ...user, password: hashedPassword };

    return userRepository.save(userSave);
  }

  async updateUser(userId: string, user: User) {
    try {
      const userRepository: Repository<User> = getRepository(User);
      let userUpdate = { ...user, updatedAt: dayjs().toDate() };

      let passwordHash;

      if (user.password) {
        passwordHash = await hash(user.password, 8);
      }

      passwordHash
        && (userUpdate = { ...userUpdate, password: passwordHash });

      await userRepository.update(userId, userUpdate);

      const updatedUser: User = await userRepository.findOne(userId);

      return updatedUser;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async deleteUser(userId: string) {
    const userRepository: Repository<User> = getRepository(User);
    const deleteResult: DeleteResult = await userRepository.delete(userId);

    return deleteResult;
  }
}

export default new UserService();