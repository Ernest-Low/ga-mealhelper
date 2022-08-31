import { ShortJsonmeals, Jsontype } from "../interfaces";
import saveRecipe from "./saveRecipe";

const lookupid = (obj: ShortJsonmeals) => {
  const apicall = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${obj.idMeal}`
    );
    const json: Jsontype = (await res.json()) as Jsontype;
    return saveRecipe(json.meals[0]);
  };
  const recipe = apicall();
  return recipe;
};

export default lookupid;
