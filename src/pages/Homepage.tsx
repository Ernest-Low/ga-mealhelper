import { useNavigate } from "react-router-dom";
import { Recipetype } from "../interfaces";

const Homepage = (props: {
  recipe: Recipetype;
  randomizemeal: () => void;
  favmeals: () => void;
}) => {
  const { recipe, randomizemeal, favmeals } = props;
  const navigate = useNavigate();

  const navigating = () => {
    navigate("/mealdisplay");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* Title */}
      <div style={{ padding: "1rem" }}>
        <h1 className="text-3xl font-bold">MealHelper</h1>
      </div>
      {/* Random Image */}
      <div>
        <div
          onClick={navigating}
          style={{
            backgroundImage: `url(${recipe.strMealThumb})`,
            height: "350px",
            width: "400px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        ></div>
        <div style={{ textAlign: "center" }}>
          <h2
            onClick={navigating}
            className="font-bold italic"
            style={{ fontSize: "1.2rem", fontFamily: "Yeseva" }}
          >
            Featuring: {recipe.strMeal}
          </h2>
        </div>
      </div>
      {/* Favorites Button */}
      <div
        style={{
          margin: "2rem 3rem",
        }}
      >
        <button
          onClick={favmeals}
          style={{
            padding: "1rem 1.5rem",
            backgroundColor: "lightblue",
            borderRadius: "1rem",
          }}
        >
          Favorited Meals
        </button>
      </div>
      {/* Container for buttons random meal / specific meal listing */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        {/* Random Meal */}
        <div
          style={{
            margin: "2rem 3rem",
          }}
        >
          <button
            onClick={randomizemeal}
            style={{
              padding: "1rem 1.5rem",
              backgroundColor: "lightblue",
              borderRadius: "1rem",
            }}
          >
            Random Meal
          </button>
        </div>
        {/* Specific Meal */}
        <div
          style={{
            margin: "2rem 3rem",
          }}
        >
          <button
            style={{
              padding: "1rem 1.5rem",
              backgroundColor: "lightblue",
              borderRadius: "1rem",
            }}
          >
            Specific Meal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
