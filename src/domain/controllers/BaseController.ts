import AxiosAdapter from "../adapters/AxiosAdapter";
import StandAppGatewayHttp from "../gateways/StandAppGatewayHttp";
import StandAppGatewayMemory from "../gateways/StandAppGatewayMemory";

export default class BaseController {

	constructor(
		readonly baseUrl = " https://1538-2804-16d8-e78e-100-ec2e-e248-691d-ba35.ngrok.io/api/v1",
		readonly httpClient = new AxiosAdapter(),
		readonly standAppGateway = new StandAppGatewayHttp(httpClient, baseUrl)
	) {
	
		console.log("base url")
		console.log(this.baseUrl)
	}
}