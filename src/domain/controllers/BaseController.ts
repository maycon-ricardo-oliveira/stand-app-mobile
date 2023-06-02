import AxiosAdapter from "../adapters/AxiosAdapter";
import StandAppGatewayHttp from "../gateways/StandAppGatewayHttp";
import StandAppGatewayMemory from "../gateways/StandAppGatewayMemory";

export default class BaseController {

	constructor(
		readonly baseUrl = 'https://127.0.0.1:80/api/v1',
		readonly httpClient = new AxiosAdapter(),
		readonly standAppGateway = new StandAppGatewayMemory(httpClient, baseUrl)
	) {
	
		console.log("base url")
		console.log(this.baseUrl)
	}
}