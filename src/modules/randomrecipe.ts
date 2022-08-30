import { Jsontype } from "../interfaces";
import saveRecipe from "./saveRecipe";

const randomrecipe = () => {
  const apicall = async () => {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const json: Jsontype = (await res.json()) as Jsontype;
    console.log("random api call");
    console.dir(json);
    return saveRecipe(json);
  };
  const recipe = apicall();
  return recipe;
};

export default randomrecipe;
