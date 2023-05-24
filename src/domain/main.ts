import AxiosAdapter from "./adapters/AxiosAdapter";
import StandAppGatewayHttp from "./gateways/StandAppGatewayHttp";
import GetComedianById from "./useCases/GetComedianById";

async function test() {
	const baseUrl = "http://localhost:80/api/v1/";
	const comedianId = "64546ba245402";
	const httpClient = new AxiosAdapter();
	console.log('test')

	const standAppGateway = new StandAppGatewayHttp(httpClient, baseUrl);
	const useCase = new GetComedianById(standAppGateway);

  const ouput = await useCase.handle(comedianId);

 console.log(ouput);

};

test();