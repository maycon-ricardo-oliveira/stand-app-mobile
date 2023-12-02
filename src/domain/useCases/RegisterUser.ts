import Place from "../entities/Place";
import User from "../entities/User";
import StandAppGateway from "../gateways/StandAppGateway";

export type RegisterProps = {
  name: string;
  email: string;
  phone: string;
  password: string;
  checkPassword: string;
  terms: boolean;
}

export default class RegisterUser {

	constructor (readonly standAppGateway: StandAppGateway) {

	}

	async handle(props: RegisterProps): Promise<User> {

		const response = await this.standAppGateway.registerUser(props);

		return response;

	}

}