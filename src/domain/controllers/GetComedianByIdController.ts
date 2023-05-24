import Comedian from "../entities/Comedian";
import GetComedianById from "../useCases/GetComedianById";
import BaseController from "./BaseController";

export default class GetComedianByIdController extends BaseController {
	readonly getComedian: GetComedianById

	constructor() {
		super();
		this.getComedian = new GetComedianById(this.standAppGateway);
	}

	async execute(comedianId: string): Promise<Comedian>
	{
		return this.getComedian.handle(comedianId);
	}

}
 