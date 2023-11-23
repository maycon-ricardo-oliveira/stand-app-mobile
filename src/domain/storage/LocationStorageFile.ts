import LocalStorage from "../useCases/LocalStorage";
import LocationStorage from "./LocationStorage";

export default class LocationStorageFile implements LocationStorage {

	constructor (readonly storage: LocalStorage, readonly repository: string) {
    this.repository = 'current-location'
	}
  
  getCurrentLocation(lat: string, lng: string, distance: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  setCurrentLocation(): Promise<any> {
    throw new Error("Method not implemented.");
  }


}