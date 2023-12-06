
export default interface StandApAuthGateway {
	loginWithEmailAndPassowrd(email: Email, password: string): Promise<any>;
  callback(driver: string): Promise<any>;
  redirect(driver: string): Promise<any>;
}