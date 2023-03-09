import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal, Meals, MEALS_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getAllMeals";

export async function createNewMeals(newMeal: Meal) {
  try {

    const storedMeals = await getAllMeals();

    const mealDateExists = storedMeals.findIndex(meal => meal.title === newMeal.date);

    if (mealDateExists > -1) {
      //Já existe uma posição com essa data da refeição

      storedMeals[mealDateExists].data = [...storedMeals[mealDateExists].data, newMeal];
      await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storedMeals));

    } else {
      // Não existe uma posição com essa data

      const newMealData: Meals = {
        title: newMeal.date,
        data: [newMeal]
      }

      const storage = JSON.stringify([...storedMeals, newMealData]);
      await AsyncStorage.setItem(MEALS_COLLECTION, storage);
    }

  } catch (error) {
    throw error;
  }
}