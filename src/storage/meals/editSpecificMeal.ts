import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllMeals } from '@storage/meals/getAllMeals';
import { Meal, MEALS_COLLECTION } from '@storage/storageConfig';

export async function editSpecificMeal(updateMeal: Meal) {
  const meals = await getAllMeals();
  const indexMealGroup = meals.findIndex(group => group.title === updateMeal.date);
  if (indexMealGroup > -1) {
    const meal = meals[indexMealGroup];

    const indexMeal = meal.data.findIndex(meal => meal.id === updateMeal.id);

    if (indexMeal > -1) {
      meal.data[indexMeal] = updateMeal;
      await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(meals));
    }
  }
}