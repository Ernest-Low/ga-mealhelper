import { useState, useEffect, createContext } from "react";
import Homepage from "./pages/Homepage";
import { Recipetype } from "./interfaces";
import { Routes, Route, useNavigate } from "react-router-dom";
import Mealdisplay from "./pages/Mealdisplay";
import randomrecipe from "./modules/randomrecipe";
import Header from "./modules/Header";
import Favoritepage from "./pages/Favoritepage";
import Mealsearch from "./pages/Mealsearch";
import Mealprep from "./pages/Mealprep";

function App() {
  const [recipe, setrecipe] = useState<Recipetype>();
  const [favs, setfavs] = useState<Recipetype[]>([]);
  const [displaylist, setdisplaylist] = useState<Recipetype[]>([]);
  const [prep, setprep] = useState<Recipetype>();

  const navigate = useNavigate();

  //  Placeholder call the randomapi and save as recipe (assign to button later)

  const randomize = async () => {
    console.log("Calling randomrecipe");
    const returned = await randomrecipe();
    console.log("Recipe returned?");
    console.dir(returned);
    setrecipe(returned);
    setprep(structuredClone(returned));
  };

  useEffect(() => {
    randomize();
  }, []);

  const displaymeal = () => {
    if (recipe) {
      return (
        <Mealdisplay recipe={recipe} favbutton={favbutton} setprep={setprep} />
      );
    } else {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }
  };

  const displayhomepage = () => {
    if (recipe) {
      return (
        <Homepage
          recipe={recipe}
          randomizemeal={randomizemeal}
          favmeals={favmeals}
        />
      );
    } else {
      <div>
        <h1>Loading</h1>
      </div>;
    }
  };

  const displaymealprep = () => {
    if (prep) {
      console.log("Init Mealprep");
      return <Mealprep prep={prep} />;
    } else {
      <div>
        <h1>Loading</h1>
      </div>;
    }
  };

  const displayfavs = () => {
    return <Favoritepage displaylist={displaylist} setrecipe={setrecipe} />;
  };

  const favmeals = () => {
    setdisplaylist(structuredClone(favs));
    navigate("/favorites");
  };

  const randomizemeal = () => {
    console.log("randomizing meal");
    randomize();
    navigate("/mealdisplay");
  };


  const favbutton = () => {
    if (recipe) {
      console.log("Clicked fav button!");
      let current: Recipetype[] = [];
      current = structuredClone(favs);
      const recipeitem: Recipetype = structuredClone(recipe);
      if (!current.some((obj) => obj.idMeal == recipeitem.idMeal)) {
        console.log("pushing in recipe");
        current.push(recipeitem);
        setfavs(current);
      } else {
        console.log("taking out recipe");
        if (current.indexOf(recipeitem) == 0) {
          console.log("removing first");
          setfavs([]);
        } else {
          console.log("search and remove");
          const index = current.indexOf(recipeitem);
          current.splice(index, 1);
          setfavs(current);
        }
      }
    }
    console.log("Outputing current fav list");
    console.dir(favs);
  };

  return (
    <div>
      <Header randomizemeal={randomizemeal} favmeals={favmeals} />
      <Routes>
        <Route index element={displayhomepage()} />
        <Route path="mealdisplay" element={displaymeal()} />
        <Route path="favorites" element={displayfavs()} />
        <Route
          path="search"
          element={
            <Mealsearch
              setrecipe={setrecipe}
              displaylist={displaylist}
              setdisplaylist={setdisplaylist}
            />
          }
        />
        <Route path="mealprep" element={displaymealprep()} />
      </Routes>
    </div>
  );
}

export default App;
