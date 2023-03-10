import { getAllMeals } from '@storage/meals/getAllMeals';
import { bestSequence } from './bestDietSequence';
import { percentageFormatted } from './percentageFormatted';


export async function getAllMealStats() {
  const meals = await getAllMeals();

  const totalMeals = meals.reduce((total, meal) => {
    return total + meal.data.length
  }, 0);

  const numberOfMealsInDiet = meals.reduce((total, meal) => {
    return total + meal.data.filter(item => item.isDiet).length
  }, 0);


  const numberOfOffDietMeals = totalMeals - numberOfMealsInDiet;
  const percentageDietMeal = ((numberOfMealsInDiet * 100) / totalMeals).toFixed(2);
  const isOnDiet = Number(percentageDietMeal) > 50 ? true : false;
  const bestDietSequence = bestSequence(meals)

  return {
    totalMeals,
    numberOfMealsInDiet,
    numberOfOffDietMeals,
    isOnDiet,
    percentageDietMeal: percentageFormatted(percentageDietMeal),
    bestDietSequence
  }
}