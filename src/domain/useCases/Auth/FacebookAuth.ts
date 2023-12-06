import StandApAuthGateway from "../../gateways/StandAppAuthGateway";
import SocialMediaAuth from "./SocialMediaAuth";

export default class FacebookAuth extends SocialMediaAuth {
  constructor (
    readonly standAppGateway: StandApAuthGateway,
    readonly driver: string = 'facebook'
    ) {      
      super(standAppGateway, driver);
	}

	async callback(): Promise<any> {
		const response = await this.standAppGateway.callback(this.driver);
		return response;
	}

  async redirect(): Promise<any> {
    const response = await this.standAppGateway.redirect(this.driver);
    return response;
  }
}