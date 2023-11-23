export default interface LocalStorage {
	store (repository: string, data?: any): Promise<any>;
	get (repository: string): Promise<any>;
}
