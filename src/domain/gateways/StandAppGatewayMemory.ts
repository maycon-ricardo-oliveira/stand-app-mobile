import HttpClient from "../useCases/HttpClient"
import StandAppGateway from "./StandAppGateway"
import getAttractionsByLocationMock from '../../../tests/mocks/getAttractionsByLocationMock.json';


export default class StandAppGatewayMemory implements StandAppGateway {

	constructor (readonly httpClient: HttpClient, readonly baseUrl: string) {

	}
	async getAttractionsByLocation(lat: string, lng: string, distance: string): Promise<any> {		
		const response = await getAttractionsByLocationMock;
		return response.data;
	}

	getAttractionsByComedianId(comedianId: string): Promise<any> {
		throw new Error("Method not implemented.")
	}
	getComedianById(comedianId: string): Promise<any> {
		throw new Error("Method not implemented.")
	}

	
}

