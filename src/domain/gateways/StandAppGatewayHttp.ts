import StandAppGateway from "./StandAppGateway";
import HttpClient from "../useCases/HttpClient";
import Attraction from "../entities/Attraction";

export default class StandAppGatewayHttp implements StandAppGateway {

	constructor (readonly httpClient: HttpClient, readonly baseUrl: string) {

	}

	async getComedianById(comedianId: string): Promise<any> {

		const comedian = await this.httpClient.get(`${this.baseUrl}/comedian/${comedianId}`);
		return comedian.data;
	}

	async getAttractionsByLocation(lat: string, lng: string, distance: string): Promise<Attraction> {
		// TODO: insert parameters
		const attractions = await this.httpClient.get(`${this.baseUrl}/attractions/location`);
		return attractions;
	}

	async getAttractionsByComedianId(comedianId: string): Promise<any> {
		const attractions = await this.httpClient.get(`${this.baseUrl}/attractions/comedian/${comedianId}`);
		return attractions;
	}

}