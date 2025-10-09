import RNAsyncStorage from '@react-native-async-storage/async-storage';


export class AsyncStorage<T> { 
  private readonly STORAGE_KEY

  constructor(){
    this.STORAGE_KEY = 'DAILYROSARY@sequences'
  }

  async store(value: T): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await RNAsyncStorage.setItem(this.STORAGE_KEY, jsonValue);
      
    } catch (e) {
      console.error('Error storing data in AsyncStorage:', e);
      throw e;
    }
  }
  
  async load(): Promise<T | null> {
    try {
      const jsonValue = await RNAsyncStorage.getItem(this.STORAGE_KEY);
      
      return jsonValue != null ? JSON.parse(jsonValue) as T : null;

    } catch (e) {
      console.error('Error reading AsyncStorage:', e);
      return null;
    }
  }
}