import { Meal } from "@storage/storageConfig";

export async function mealsCreate(newMeal: Meal) {
  try {
    /*pega todos as informações guardadas no async-storage:
    Meals: {
      title,
      meal: ["refeições"]
    }

    Verifica se ja existe um Meals com a mesma data da newMeal
     1º Se existe então junta as informações dessa mesma data com o newMeal
     2º Se não existe, cria uma nova Meals: 
     {
      title: newMeal.date,
      data: [newMeal]
     }
     e adiciona com as outras informações que veio do async-storage
    **/
  } catch (error) {

  }
}