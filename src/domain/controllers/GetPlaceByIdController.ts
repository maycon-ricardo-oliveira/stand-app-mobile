import Place from "../entities/Place";
import GetPlaceById from "../useCases/GetPlaceById";
import BaseController from "./BaseController";

export default class GetPlaceByIdController extends BaseController {
	readonly getPlace: GetPlaceById

	constructor() {
		super();
		this.getPlace = new GetPlaceById(this.standAppGateway);
	}

	async execute(placeId: string): Promise<Place>
	{
		return this.getPlace.handle(placeId);
	}

}
 