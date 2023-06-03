import Attraction from "../entities/Attraction";
import GetAttractionsByPlaceId from "../useCases/GetAttractionsByPlaceId";
import BaseController from "./BaseController";

export default class GetAttractionsByPlaceController extends BaseController {
	readonly getAttractions: GetAttractionsByPlaceId

	constructor() {
		super();
		this.getAttractions = new GetAttractionsByPlaceId(this.standAppGateway);
	}

	async execute(placeId: string): Promise<Attraction[]>
	{
		return this.getAttractions.handle(placeId);
	}

}
