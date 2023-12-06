import StandApAuthGateway from "../../gateways/StandAppAuthGateway";

export default abstract class Auth {

  constructor (
    readonly standAppGateway: StandApAuthGateway,
    readonly driver: string
    ) {
      this.driver = ''
	}

  abstract callback(): Promise<any>;
  abstract redirect(): Promise<any>;

}