import StandAppGateway from "./StandAppGateway";
import HttpClient from "../useCases/HttpClient";
import Attraction from "../entities/Attraction";
import axios from "axios";

export default class StandAppGatewayHttp implements StandAppGateway {

	constructor (readonly httpClient: HttpClient, readonly baseUrl: string) {

	}

	async getComedianById(comedianId: string): Promise<any> {

		const comedian = await this.httpClient.get(`${this.baseUrl}/comedian/${comedianId}`);
		return comedian.data;
	}

	async getAttractionsByLocation(lat: string, lng: string, distance: string): Promise<any> {

		const response = await axios.get(`${this.baseUrl}/attractions/location`, {params: {
			lat: lat,
			lng: lng,
			distance: distance,
			limit: 100,
		}})

		return response.data;
	}

	async getAttractionsByComedianId(comedianId: string): Promise<any> {
		const attractions = await this.httpClient.get(`${this.baseUrl}/attractions/comedian/${comedianId}`);
		return attractions;
	}

}