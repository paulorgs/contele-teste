import { v4 as uuidv4, v4 } from 'uuid';
import CustomError from '../errors/CustomError';
import { verifyIfEmailIsUsed } from '../helpers/Helpers';
import User from '../models/User';
import { getUsers, save } from '../repositories/UserRepository';

interface Request {
  email: string;
  password: string;
}

export function createUser({ email, password }: Request): any {
  const newUser = {
    id: v4(),
    email: email,
    password: password,
  } as User;

  verifyIfEmailIsUsed(email);
  save(newUser);

  return newUser;
}
