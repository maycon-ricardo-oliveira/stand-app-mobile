import ComedianMeta from "./ComedianMeta";

export default class Comedian {

	constructor(
		readonly id: string,
		readonly name: string,
		readonly miniBio: string,
		readonly thumbnail: string,
		readonly imageMain: string,
		readonly onFire: boolean = false,
		readonly socialMedias: string,
		readonly metas: Array<ComedianMeta>,
		readonly attractions: Array<any>
	) {

	}

}