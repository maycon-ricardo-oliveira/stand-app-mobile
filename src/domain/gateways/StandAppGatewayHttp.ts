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

	// 	 const params = { params: {
	// 		answer: 42 ,
	// 		lat: -23.546184,
	// 		lng: -46.5798771,
	// 		distance: 100,
	// 		limit: 100,
	// 	}
	// }

		const config = {
			 params: {
				answer: 42 ,
				lat: lat,
				lng: lng,
				distance: 1000000,
				limit: 100,
			}
		}

		const attractions = await this.httpClient.get(`${this.baseUrl}/attractions/location`);
		console.log(attractions);

		return attractions;
	}

	async getAttractionsByComedianId(comedianId: string): Promise<any> {
		const attractions = await this.httpClient.get(`${this.baseUrl}/attractions/comedian/${comedianId}`);
		return attractions;
	}

}