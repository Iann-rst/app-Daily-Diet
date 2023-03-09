import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getAllMeals";

export async function RemoveSpecificMeal(id: string, title: string) {
  try {
    const storageData = await getAllMeals();
    const mealsOfDay = storageData.find(
      (item) => item.title === title
    );
    if (mealsOfDay) {
      const filteredMeals = mealsOfDay.data.filter((meal) => meal.id !== id);

      mealsOfDay.data = filteredMeals;

      const updatedStorageDataWhenNoMeals = storageData.filter(
        (item) => item.title !== mealsOfDay.title
      );

      if (filteredMeals.length === 0) {
        await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(updatedStorageDataWhenNoMeals));
      } else {
        await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storageData));

      }
    }
  } catch (error) {
    throw error;
  }
}