import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import { Recipetype } from "./interfaces";
import { Routes, Route} from "react-router-dom";
import Mealdisplay from "./pages/Mealdisplay";
import randomrecipe from "./modules/randomrecipe";
import Header from "./modules/Header";

function App() {
  const [recipe, setrecipe] = useState<Recipetype>();
  const [favs, setfavs] = useState<Recipetype[]>();

  //  Placeholder call the randomapi and save as recipe (assign to button later)
  useEffect(() => {
    const inorder = async () => {
      console.log("Calling randomrecipe");
      const returned = await randomrecipe();
      console.log("Recipe returned?");
      console.dir(returned);
      setrecipe(returned);
    };
    inorder();
  }, []);

  const recipecheck = () => {
    if (recipe) {
      return <Mealdisplay recipe={recipe} favbutton={favbutton} />;
    } else {
      <div>
        <h1>Loading</h1>
      </div>;
    }
  };

  const homepagecheck = () => {
    if (recipe) {
      return <Homepage recipe={recipe} />;
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
      <Header />
      <Routes>
        <Route index element={homepagecheck()} />
        <Route path="mealdisplay" element={recipecheck()} />
      </Routes>
    </div>
  );
}

export default App;
