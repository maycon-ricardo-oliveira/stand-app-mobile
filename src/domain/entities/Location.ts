import Address from "./Address";

export default class Location {

	constructor(
    readonly description: string,
		readonly lat: string,
		readonly lng: string,
		readonly address: Address
	) {

	}

}
