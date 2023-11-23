export default class Address {

	constructor(
		readonly street: string,
		readonly neighbourhood: string,
		readonly city: string,
		readonly state: string,
		readonly contry: string,
		readonly zipcode: string,
    readonly formattedAddress: string,
	) {

	}

}
