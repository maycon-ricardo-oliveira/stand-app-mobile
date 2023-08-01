import AxiosAdapter from "../adapters/AxiosAdapter";
import StandAppGatewayHttp from "../gateways/StandAppGatewayHttp";
import StandAppGatewayMemory from "../gateways/StandAppGatewayMemory";

export default class BaseController {

	constructor(
		readonly baseUrl = "https://89c9-2804-3e50-38a2-100-4f7f-5338-c907-c85e.ngrok.io/api/v1",
		readonly httpClient = new AxiosAdapter(),
		readonly standAppGateway = new StandAppGatewayHttp(httpClient, baseUrl)
	) {
	
		console.log("base url")
		console.log(this.baseUrl)
	}
}