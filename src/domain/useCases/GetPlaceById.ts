import Place from "../entities/Place";
import StandAppGateway from "../gateways/StandAppGateway";

export default class GetPlaceById {

	constructor (readonly standAppGateway: StandAppGateway) {

	}

	async handle(placeId: string): Promise<Place> {

		const place = await this.standAppGateway.getPlaceById(placeId);

		return new Place(
			place.id,
			place.name,
			place.seats,
			place.address,
			place.zipcode,
			place.image,
			place.lat,
			place.lng
		);

	}

}