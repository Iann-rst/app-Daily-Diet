import { Meals } from '@storage/storageConfig';

export function bestSequence(meals: Meals[]) {
  let sequence = 0;
  let bestSequenceMealInDiet = 0;

  const newMeals = meals.flatMap(meals => meals.data);

  newMeals.forEach((meal) => {
    if (meal.isDiet) {
      sequence++;
    } else {
      sequence = 0;
    }

    if (sequence > bestSequenceMealInDiet) {
      bestSequenceMealInDiet = sequence
    }
  })
  return bestSequenceMealInDiet;
}