export default interface StandAppGateway {
	getAttractionsByLocation(lat: string, lng: string, distance: string): Promise<any>;
	getAttractionsByPlaceId(placeId: string): Promise<any>;
	getAttractionsByComedianId(comedianId: string): Promise<any>;
	getComedianById(comedianId: string): Promise<any>;
	getPlaceById(placeId: string): Promise<any>;

	getAllComedians(): Promise<Array<any>>;

}