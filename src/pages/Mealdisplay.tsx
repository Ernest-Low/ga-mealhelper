import { Recipetype } from "../interfaces";

const Mealdisplay = (props: { recipe: Recipetype; favbutton: () => void }) => {
  const { recipe, favbutton } = props;

  const instructions = recipe.strInstructions.split(`\r\n`);

  return (
    <div>
      <div>
        <div>
          <img src={`${recipe.strMealThumb}/preview`}></img>
        </div>
        {/* Img Preview */}
        <div>{recipe.strMeal}</div>
        {/* Meal Name */}
      </div>
      <div>{recipe.strCategory}</div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button>Favorite</button>
        <button>Start Cooking</button>
      </div>
      <div>
        <div>
          <h2>Ingredients</h2>
          <div>
            {/* Ingredient Name */}
            {recipe.arringredients.map((val) => (
              <li>{val}</li>
            ))}
          </div>
          <div>
            {/* Ingredient Measurement */}
            {recipe.arrmeasure.map((val) => (
              <li>{val}</li>
            ))}
          </div>
        </div>
        <div>
          <h2>Meal Prep Instructions</h2>
          <p>{instructions}</p>
        </div>
      </div>
      <div>Youtube Video</div>
    </div>
  );
};

export default Mealdisplay;
