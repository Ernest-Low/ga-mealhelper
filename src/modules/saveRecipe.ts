import { Recipetype, Jsonmeals } from "../interfaces";

//  Save object (from meals) into recipe state
const saveRecipe = (obj: Jsonmeals) => {
  // strIngredient1: obj.strIngredient1
  // strMeasure1: obj.strMeasure1

  const ingredients: string[] = [];
  const ingmeasure: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingre: any = `strIngredient${i}`;
    const stringre: keyof typeof obj = ingre;
    if (stringre != "idMeal") {
      const result = obj[stringre];
      if (result != "" && result != null) {
        ingredients.push(result.trim());
        const meas: any = `strMeasure${i}`;
        const strmeas: keyof typeof obj = meas;
        if (strmeas != "idMeal") {
          const result2 = obj[strmeas].trim();
          ingmeasure.push(result2);
        }
      }
    }
  }

  const returnobj: Recipetype = {
    idMeal: obj.idMeal,
    strMeal: obj.strMeal,
    strCategory: obj.strCategory,
    strArea: obj.strArea,
    strInstructions: obj.strInstructions,
    strMealThumb: obj.strMealThumb,
    strYoutube: obj.strYoutube,
    arringredients: ingredients,
    arrmeasure: ingmeasure,
  };




  return returnobj;
};

export default saveRecipe;
