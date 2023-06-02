import Attraction from "../entities/Attraction";
import StandAppGateway from "../gateways/StandAppGateway";

export default class GetAttractionsByLocation {

	constructor (readonly standAppGateway: StandAppGateway) {

	}

	async handle(lat: string, lng: string, distance: string): Promise<Attraction[]> {

		const attractions = await this.standAppGateway.getAttractionsByLocation(lat, lng, distance);
		
		return attractions.map((attraction: any) => {
			return new Attraction(
				attraction.id,
				attraction.title,
				attraction.date,
				attraction.duration,
				attraction.comedian,
				attraction.timeToEvent,
				attraction.place,
				attraction.status,
				attraction.owner
			);
		});

	}

}