export default class User {

	constructor(
		readonly id: string | null,
		readonly name: string,
		readonly email: string,
		readonly phone: string,
		readonly password: string,
		readonly terms: boolean,
	) {

	}

}