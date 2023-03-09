import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION, Meals } from '@storage/storageConfig';


export async function getAllMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: Meals[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}