import User from "../entities/User";
import RegisterUser, { RegisterProps } from "../useCases/RegisterUser";
import BaseController from "./BaseController";

export default class RegisterUserController extends BaseController {
	readonly register: RegisterUser

	constructor() {
		super();
		this.register = new RegisterUser(this.standAppGateway);
	}

	async execute(props: RegisterProps): Promise<User>
	{
    return this.register.handle(props);
	}

}
 