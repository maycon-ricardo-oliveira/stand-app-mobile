import Attraction from "../entities/Attraction";
import Comedian from "../entities/Comedian";
import StandAppGateway from "../gateways/StandAppGateway";

export default class GetComedianById {

	constructor (readonly standAppGateway: StandAppGateway) {

	}

	async handle(comedianId: string): Promise<Comedian> {

		const comedian = await this.standAppGateway.getComedianById(comedianId);

		return new Comedian(
			comedian.id,
			comedian.name,
			comedian.miniBio,
			comedian.thumbnail,
			comedian.socialMedias,
			comedian.attractions
		);

	}

}