import { getAllMeals } from './getAllMeals';

export async function getMealDetails(id: string) {
  try {
    const storedMeals = await getAllMeals();

    const meals = storedMeals.findIndex(meal => meal.data.find(item => item.id === id));

    if (meals > -1) {
      const meal = storedMeals[meals];

      const detailsMeal = meal.data.find(item => item.id === id);

      if (detailsMeal) {
        return detailsMeal;
      }
    }

  } catch (error) {
    throw error;
  }
}