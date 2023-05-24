import AxiosAdapter from "../adapters/AxiosAdapter";
import StandAppGatewayHttp from "../gateways/StandAppGatewayHttp";

export default class BaseController {

	constructor(
		readonly baseUrl = process.env.STANDAPP_API_URL,
		readonly httpClient = new AxiosAdapter(),
		readonly standAppGateway = new StandAppGatewayHttp(httpClient, baseUrl)
	) {
	
	}
}