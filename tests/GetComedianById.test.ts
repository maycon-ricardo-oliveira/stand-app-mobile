import {describe, expect, test} from '@jest/globals';
import AxiosAdapter from '../src/domain/adapters/AxiosAdapter';
import StandAppGatewayHttp from '../src/domain/gateways/StandAppGatewayHttp';
import GetComedianById from '../src/domain/useCases/GetComedianById';

test("Must be return a comedian", async function () {
	const baseUrl = "http://localhost:80/api/v1";
	const comedianId = "64546ba245402";
	const httpClient = new AxiosAdapter();

	const standAppGateway = new StandAppGatewayHttp(httpClient, baseUrl);
	const useCase = new GetComedianById(standAppGateway);

  const ouput = await useCase.handle(comedianId);

 console.log(ouput);

	expect(ouput.id).toBe(comedianId);
	expect(ouput.name).toBe("Comediante teste");
});