import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const usr = this.usersRepository.findById(user_id);
    if (!usr) {
      throw new Error("user doest not exist");
    }
    return usr;
  }
}

export { ShowUserProfileUseCase };
