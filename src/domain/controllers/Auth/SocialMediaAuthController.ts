import AppleAuth from "../../useCases/Auth/AppleAuth";
import FacebookAuth from "../../useCases/Auth/FacebookAuth";
import GoogleAuth from "../../useCases/Auth/GoogleAuth";
import BaseController from "../BaseController";

export default class SocialMediaAuthController extends BaseController {
  
  readonly facebook: FacebookAuth;
  readonly apple: AppleAuth;
  readonly google: GoogleAuth;

  constructor() {
    super()
    this.facebook = new FacebookAuth(this.standAppAuthGateway);
    this.apple = new AppleAuth(this.standAppAuthGateway);
    this.google = new GoogleAuth(this.standAppAuthGateway);
  }

  async callback(driver: string): Promise<any> {
    switch(driver) {
      case 'google':
        this.google.callback();
        break;

      case 'facebook':
        this.facebook.callback();
        break;

      case 'apple':
        this.apple.callback();
        break;
    }

  }

  async redirect(driver: string): Promise<any> {
    switch(driver) {
      case 'google':
        this.google.redirect();
        break;

      case 'facebook':
        this.facebook.redirect();
        break;

      case 'apple':
        this.apple.redirect();
        break;
    }
  }

}