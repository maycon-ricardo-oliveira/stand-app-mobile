import Attraction from "../entities/Attraction";
import StandAppGateway from "../gateways/StandAppGateway";

export default class GetAttractionsByComedianId {

	constructor (readonly standAppGateway: StandAppGateway) {

	}

	async handle(comedianId: string): Promise<any> {

		const attractions = await this.standAppGateway.getAttractionsByComedianId(comedianId);

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