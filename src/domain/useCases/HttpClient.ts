export default interface HttpClient {
	get (url: string, config?: any): Promise<any>;
	post (url: string, body: any): Promise<any>;
}
