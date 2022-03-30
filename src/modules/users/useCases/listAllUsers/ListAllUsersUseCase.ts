import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const usr = this.usersRepository.findById(user_id);
    if (!usr) {
      throw new Error("User does not exists!");
    }

    if (!usr.admin) {
      throw new Error("user not admin");
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
