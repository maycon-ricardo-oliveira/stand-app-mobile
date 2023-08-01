import Attraction from "../entities/Attraction";
import Comedian from "../entities/Comedian";
import StandAppGateway from "../gateways/StandAppGateway";

export default class GetAllComedians {

	constructor (readonly standAppGateway: StandAppGateway) {

	}

	async handle(): Promise<Array<Comedian>> {

		const comedians = await this.standAppGateway.getAllComedians();

		console.log("comedians on comedians", comedians);

		return comedians.map((comedian) => {
			return new Comedian(
				comedian.id,
				comedian.name,
				comedian.miniBio,
				comedian.thumbnail,
				comedian.imageMain,
				comedian.onFire,
				comedian.socialMedias,
				comedian.metas,
				comedian.attractions
			);
		});

	}

}