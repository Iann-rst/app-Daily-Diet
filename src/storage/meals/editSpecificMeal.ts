import { getAllMeals } from '@storage/meals/getAllMeals';
import { Meal } from '@storage/storageConfig';

export async function EditSpecificMeal(meal: Meal) {

  /** Editar uma refeição */
  const storageMeals = await getAllMeals();

}