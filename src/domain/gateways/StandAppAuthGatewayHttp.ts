import StandAppGateway from "./StandAppGateway";
import HttpClient from "../useCases/HttpClient";
import StandAppAuthGateway from "./StandAppAuthGateway";

export default class StandAppAuthGatewayHttp implements StandAppAuthGateway {

	  constructor (readonly httpClient: HttpClient, readonly baseUrl: string) {

	}

  async callback(driver: string): Promise<any> {
		const authenticate = await this.httpClient.get(`${this.baseUrl}/auth/${driver}/callback`);
		return authenticate.data;
  }

  async redirect(driver: string): Promise<any> {
		return await this.httpClient.get(`${this.baseUrl}/auth/${driver}`);
  }

	async loginWithEmailAndPassowrd(email: Email, password: string): Promise<any> {
		const user = await this.httpClient.post(`${this.baseUrl}/user/login`, {
		email, password
	});
		return user.data;	
	}
}