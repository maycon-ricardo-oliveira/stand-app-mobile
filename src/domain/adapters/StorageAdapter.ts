import AsyncStorage from '@react-native-async-storage/async-storage';
import LocalStorage from '../useCases/LocalStorage';

export default class StorageAdapter implements LocalStorage {
  async store(repository: string, data?: any): Promise<any> {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(repository, jsonValue);
    } catch (e) {
      throw new Error('Is not possible to get data')
    }
  }

	async get(repository: string): Promise<any> {
		try {
      const jsonValue = await AsyncStorage.getItem(repository);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      throw new Error('Is not possible to get data')
    }
	}

}
