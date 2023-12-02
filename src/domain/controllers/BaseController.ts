import AxiosAdapter from "../adapters/AxiosAdapter";
import StandAppGatewayHttp from "../gateways/StandAppGatewayHttp";
import StandAppGatewayMemory from "../gateways/StandAppGatewayMemory";

export default class BaseController {

	constructor(
		readonly baseUrl = "http://localhost:80/api/v1",
		readonly httpClient = new AxiosAdapter(),
		readonly standAppGateway = new StandAppGatewayHttp(httpClient, baseUrl)
	) {
	
		console.log("base url")
		console.log(this.baseUrl)
	}
}