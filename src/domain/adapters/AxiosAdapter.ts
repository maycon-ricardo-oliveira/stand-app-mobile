import HttpClient from "../useCases/HttpClient";
import axios from "axios";

export default class AxiosAdapter implements HttpClient {

	async get(url: string, config?: any): Promise<any> {
		const head = {
			headers: { 'Content-Type': 'application/json' }
		};
		const response = await axios.get(url, config);
		return response.data;
	}

	async post(url: string, body: any): Promise<any> {
		return await axios.post(url, body);

		return response.data;
	}

}
