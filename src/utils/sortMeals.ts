import { Meal, Meals } from '@storage/storageConfig';
/** Função para ordenar as refeições de acordo com a data e com a hora de cada uma **/

export async function sortMeals(meals: Meals[]) {
  meals.sort((a: Meals, b: Meals) => {
    if (a.title > b.title) {
      return 1
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  })

  meals.map(meal => {
    meal.data.sort((a: Meal, b: Meal) => {
      if (a.hour > b.hour) {
        return 1
      }
      if (a.hour < b.hour) {
        return -1;
      }
      return 0;
    })
  })

  return meals;
}