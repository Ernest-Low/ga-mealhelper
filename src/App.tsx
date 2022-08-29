import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import saveRecipe from "./modules/saveRecipe";
import { Jsontype, Recipetype } from "./interfaces";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import Mealdisplay from "./pages/Mealdisplay";

function App() {
  const [recipe, setrecipe] = useState<Recipetype>();

  const user2 = {
    name: "Bruce",
    id: 1,
  };

  //  Placeholder call the randomapi and save as recipe
  useEffect(() => {
    const apicall = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const json: Jsontype = (await res.json()) as Jsontype;
      console.dir(json);
      setrecipe(saveRecipe(json));
      console.dir(recipe);
    };

    apicall();
  }, []);

  console.dir(user2);

  const recipecheck = () => {
    if (recipe) {
      return <Mealdisplay recipe={recipe} favbutton={favbutton} />;
    } else {
      <div>
        <h1>Loading</h1>
      </div>;
    }
  };

  const favbutton = () => {
    console.log("Clicked fav button!");
  };

  return (
    <div>
      {/* Tailwind testing */}
      <h1 className="text-3xl font-bold underline">Hello world!</h1> <Outlet />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="mealdisplay" element={recipecheck()} />
      </Routes>
    </div>
  );
}

export default App;
