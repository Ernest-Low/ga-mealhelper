import { Recipetype, Jsontype } from "../interfaces";

//  Save object (from meals) into recipe state
const saveRecipe = (obj: Jsontype) => {
  // strIngredient1: obj.meals[0].strIngredient1
  // strMeasure1: obj.meals[0].strMeasure1

  const ingredients: string[] = [];
  const ingmeasure: string[] = [];

  interface StringMap {}

  for (let i = 1; i <= 20; i++) {
    const ingre: any = "strIngredients" + i;
    const stringre: keyof typeof obj.meals[0] = ingre;
    if (stringre != "idMeal") {
      const result = obj.meals[0][stringre];
      if (result != "") {
        ingredients.push(result);
      }
    }
    const meas: any = "strIngredients" + i;
    const strmeas: keyof typeof obj.meals[0] = meas;
    if (strmeas != "idMeal") {
      const result = obj.meals[0][strmeas];
      if (result != "") {
        ingmeasure.push(result);
      }
    }
  }

  const returnobj: Recipetype = {
    idMeal: obj.meals[0].idMeal,
    strMeal: obj.meals[0].strMeal,
    strCategory: obj.meals[0].strCategory,
    strArea: obj.meals[0].strArea,
    strInstructions: obj.meals[0].strInstructions,
    strMealThumb: obj.meals[0].strMealThumb,
    strYoutube: obj.meals[0].strYoutube,
    arringredients: ingredients,
    arrmeasure: ingmeasure,
  };
  return returnobj;
};

export default saveRecipe;
