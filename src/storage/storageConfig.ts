const MEALS_COLLECTION = '@daily-diet:meals';

type Meal = {
  id: string;
  name: string;
  description: string;
  date: string
  hour: string;
  isDiet: boolean;
}

type Meals = {
  title: string;
  data: Meal[];
}

export { MEALS_COLLECTION, Meals, Meal };