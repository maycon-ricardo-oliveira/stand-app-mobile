import Attraction from "../entities/Attraction";
import GetAttractionsByLocation from "../useCases/GetAttractionsByLocation";
import BaseController from "./BaseController";

export default class GetAttractionsByLocationController extends BaseController {
	readonly getAttractions: GetAttractionsByLocation

	constructor() {
		super();
		this.getAttractions = new GetAttractionsByLocation(this.standAppGateway);
	}

	async execute(lat: string, lng: string, distance: string): Promise<Attraction[]>
	{
		return this.getAttractions.handle(lat, lng, distance);
	}

}
