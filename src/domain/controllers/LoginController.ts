import User from "../entities/User";
import Login from "../useCases/Login";
import BaseController from "./BaseController";

export default class LoginController extends BaseController {
	readonly login: Login

	constructor() {
		super();
		this.login = new Login(this.standAppAuthGateway);
	}

	async loginWithEmailAndPassword(email: Email, password: string): Promise<User>
	{
    return this.login.loginWithEmailAndPassword(email, password);
  }

}
 