import Comedian from "../entities/Comedian";
import GetAllComedians from "../useCases/GetAllComedians";
import BaseController from "./BaseController";

export default class GetAllComediansController extends BaseController {
	readonly getComedians: GetAllComedians

	constructor() {
		super();
		this.getComedians = new GetAllComedians(this.standAppGateway);
	}

	async execute(): Promise<Array<any>>
	{
		return this.getComedians.handle();
	}

}
 