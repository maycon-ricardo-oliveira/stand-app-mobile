import HttpClient from "../useCases/HttpClient"
import StandAppGateway from "./StandAppGateway"
import getAttractionsByLocationMock from '../../../tests/mocks/getAttractionsByLocationMock.json';
import User from "../entities/User";
import { RegisterProps } from "../useCases/RegisterUser";


export default class StandAppGatewayMemory implements StandAppGateway {

	constructor (readonly httpClient: HttpClient, readonly baseUrl: string) {

	}
	loginWithEmailAndPassowrd(email: Email, password: string): Promise<any> {
		throw new Error("Method not implemented.");
	}
	registerUser(userProps: RegisterProps): Promise<User> {
		throw new Error("Method not implemented.");
	}
	getAllComedians(): Promise<any[]> {
		throw new Error("Method not implemented.");
	}
	getPlaceById(placeId: string): Promise<any> {
		throw new Error("Method not implemented.");
	}

	getAttractionsByPlaceId(placeId: string): Promise<any> {
		throw new Error("Method not implemented.");
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

