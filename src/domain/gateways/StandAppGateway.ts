export default interface StandAppGateway {
	getAttractionsByLocation(lat: string, lng: string, distance: string): Promise<any>;
	getAttractionsByComedianId(comedianId: string): Promise<any>;
	getComedianById( comedianId: string): Promise<any>;
}