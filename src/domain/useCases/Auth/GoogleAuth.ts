import Auth from "./SocialMediaAuth";
import StandApAuthGateway from "../../gateways/StandAppAuthGateway";
import StandAppGateway from "../../gateways/StandAppGateway";
import SocialMediaAuth from "./SocialMediaAuth";

export default class GoogleAuth extends SocialMediaAuth {
  constructor (
    readonly standAppGateway: StandApAuthGateway,
    readonly driver: string = 'google'
    ) {      
      super(standAppGateway, driver);
	}

	async callback(): Promise<any> {
		const response = await this.standAppGateway.callback(this.driver);
		return response;

	}

  async redirect(): Promise<any> {
    const response = await this.standAppGateway.redirect(this.driver);

    console.log("Response axios")
    console.log(response)
    return response;
  }
}