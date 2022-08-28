import { useState, useEffect, useContext } from "react";
import Homepage from "./pages/Homepage";
import saveRecipe from "./modules/saveRecipe";
import { Jsontype, Recipetype } from "./interfaces";

function App() {
  const [recipe, setrecipe] = useState<Recipetype>();

  const user2 = {
    name: "Bruce",
    id: 1,
  };

  useEffect(() => {
    const apicall = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const json : Jsontype = await res.json() as Jsontype;
      console.dir(json);
      setrecipe(saveRecipe(json));
      console.dir(recipe);
    };

    apicall();
  }, []);

  console.dir(user2);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Homepage />
    </div>
  );
}

export default App;
