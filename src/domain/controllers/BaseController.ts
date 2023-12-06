import AxiosAdapter from "../adapters/AxiosAdapter";
import StandAppAuthGatewayHttp from "../gateways/StandAppAuthGatewayHttp";
import StandAppGatewayHttp from "../gateways/StandAppGatewayHttp";
import StandAppGatewayMemory from "../gateways/StandAppGatewayMemory";

export default class BaseController {

	constructor(
		readonly baseUrl = "http://localhost:8888/api/v1",
		readonly httpClient = new AxiosAdapter(),
		readonly standAppGateway = new StandAppGatewayHttp(httpClient, baseUrl),
		readonly standAppAuthGateway = new StandAppAuthGatewayHttp(httpClient, baseUrl)
		) {
	
		console.log("base url")
		console.log(this.baseUrl)
	}
}