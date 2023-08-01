import Attraction from "../entities/Attraction";
import GetAttractionsByComedianId from "../useCases/GetAttractionsByComedianId";
import GetAttractionsByLocation from "../useCases/GetAttractionsByLocation";
import BaseController from "./BaseController";

export default class GetAttractionsByComedianController extends BaseController {
	readonly getAttractions: GetAttractionsByComedianId

	constructor() {
		super();
		this.getAttractions = new GetAttractionsByComedianId(this.standAppGateway);
	}

	async execute(comedianId: string): Promise<Attraction[]>
	{
		return this.getAttractions.handle(comedianId);
	}

}
