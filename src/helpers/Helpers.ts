import CustomError from '../errors/CustomError';
import User from '../models/User';
import { getUsers } from '../repositories/UserRepository';

export function verifyIfEmailIsUsed(email: string) {
  const usersRepo = getUsers();
  const savedUser = usersRepo.users.filter(
    (user: User) => user.email === email,
  );
  console.log(savedUser);

  if (savedUser[0]) {
    throw new CustomError('Email already used', 400);
  }
}
