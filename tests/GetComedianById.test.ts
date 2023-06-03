import {describe, expect, test} from '@jest/globals';
import AxiosAdapter from '../src/domain/adapters/AxiosAdapter';
import StandAppGatewayHttp from '../src/domain/gateways/StandAppGatewayHttp';
import GetComedianById from '../src/domain/useCases/GetComedianById';
import GetAttractionsByComedianId from '../src/domain/useCases/GetAttractionsByComedianId';
import GetPlaceById from '../src/domain/useCases/GetPlaceById';

test("Must be return a comedian", async function () {
	const baseUrl = "http://localhost:80/api/v1";
	const comedianId = "64546ba245402";
	const httpClient = new AxiosAdapter();

	const standAppGateway = new StandAppGatewayHttp(httpClient, baseUrl);
	const useCase = new GetComedianById(standAppGateway);

  const ouput = await useCase.handle(comedianId);

	expect(ouput.id).toBe(comedianId);
	expect(ouput.name).toBe("Comediante teste");
});

test("Must be return attractions by comedian", async function () {
	const baseUrl = "http://localhost:80/api/v1";
	const comedianId = "63d1dc4d4b52d";
	const httpClient = new AxiosAdapter();

	const standAppGateway = new StandAppGatewayHttp(httpClient, baseUrl);
	const useCase = new GetAttractionsByComedianId(standAppGateway);

  const ouput = await useCase.handle(comedianId);

	expect(ouput[0].comedian.id).toBe(comedianId);
});

test("Must be return place data", async function () {
	const baseUrl = "http://localhost:80/api/v1";
	const placeId = "63d332d4be678";
	const httpClient = new AxiosAdapter();

	const standAppGateway = new StandAppGatewayHttp(httpClient, baseUrl);
	const useCase = new GetPlaceById(standAppGateway);

  const ouput = await useCase.handle(placeId);

	expect(ouput.id).toBe(placeId);
	expect(ouput.name).toBe("Espaço Cultural Urca");
	expect(ouput.seats).toBe(300);
});