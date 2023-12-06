import User from "../entities/User";
import StandApAuthGateway from "../gateways/StandAppAuthGateway";

export default class Login {

	constructor (readonly standAppGateway: StandApAuthGateway) {

	}

	async loginWithEmailAndPassword(email:Email, password:string): Promise<User> {
		const response = await this.standAppGateway.loginWithEmailAndPassowrd(email, password);
		return response;
	}

}