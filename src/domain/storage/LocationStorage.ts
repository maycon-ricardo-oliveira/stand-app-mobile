export default interface StandAppGateway {
	getCurrentLocation(lat: string, lng: string, distance: string): Promise<any>;
	setCurrentLocation(): Promise<any>;

}