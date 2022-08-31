import { Recipetype } from "../interfaces";

const Mealdisplay = (props: { recipe: Recipetype; favbutton: () => void }) => {
  const { recipe, favbutton } = props;

  const instructions = recipe.strInstructions.split(`\r\n`);

  const embedurl = recipe.strYoutube.slice(32);

  return (
    // Main container Div
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        margin: "1rem",
      }}
    >
      <div>
        {/* Container for preview image & Meal name */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignContent: "center",
            margin: "1.5rem",
          }}
        >
          {/* Img Preview */}
          <div style={{ maxWidth: "15%", maxHeight: "15%", margin: "0 1rem 0 3rem" }}>
            <img
              src={`${recipe.strMealThumb}`}
              style={{ margin: "1rem" }}
            ></img>
          </div>
          {/* Right side container */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Meal Name Container */}
            <div>
              <h1
                className="text-3xl font-bold underline"
                style={{ margin: "1rem", fontFamily: "Yeseva" }}
              >
                {recipe.strMeal}
              </h1>
            </div>
            {/* Below Meal name container */}
            <div style={{ display: "flex", flexDirection: "row" }}>
              {/* Meal Category */}
              <div
                className="font-bold italic"
                style={{ margin: "0 1rem", fontFamily: "Yeseva" }}
              >
                <h2>{recipe.strArea}</h2>
              </div>
              <div
                className="font-bold italic"
                style={{ margin: "0 1rem", fontFamily: "Yeseva" }}
              >
                <h2>{recipe.strCategory}</h2>
              </div>
            </div>
            {/* Button holding div */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "0.8rem",
                // justifyContent: "space-evenly",
              }}
            >
              <button
                style={{
                  padding: "0px 20px",
                  backgroundColor: "#FF1493",
                  color: "ghostwhite",
                  margin: "0 1rem 0 0",
                  borderRadius: "1rem",
                  fontFamily: "Yeseva",
                }}
                onClick={favbutton}
              >
                Favorite
              </button>
              <button
                style={{
                  padding: "0.3rem 0.75rem",
                  backgroundColor: "#483D8B",
                  color: "ghostwhite",
                  margin: "0 1rem",
                  borderRadius: "1rem",
                  fontFamily: "Yeseva",
                }}
              >
                Start Cooking
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Div holding the Ingredients & Meal Prep */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: "Yeseva" }}>
            Ingredients / Measurement
          </h2>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              {/* Ingredient Name */}
              {recipe.arringredients.map((val, key) => (
                <li key={key} style={{ textAlign: "left" }}>
                  {val}
                </li>
              ))}
            </div>
            <div>
              {/* Ingredient Measurement */}
              {recipe.arrmeasure.map((val, key) => (
                <li
                  key={key}
                  style={{
                    listStyleType: "none",
                    listStylePosition: "inside",
                    margin: 0,
                    padding: "0px 20px",
                    textAlign: "left",
                  }}
                >
                  {val}
                </li>
              ))}
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "60%" }}>
          <h2 className="text-2xl font-bold" style={{ fontFamily: "Yeseva" }}>
            Meal Prep Instructions
          </h2>
          {instructions.map((words, key) => {
            return (
              <p key={key} style={{ textAlign: "left" }}>
                {words}
              </p>
            );
          })}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          className="text-2xl font-bold"
          style={{ margin: "2rem 0 1rem 0", fontFamily: "Yeseva" }}
        >
          Youtube Video
        </h2>
        <div
          className="video-responsive"
          style={{ width: "60%", alignItems: "center", margin: "0 auto" }}
        >
          <iframe
            width="1200px"
            height="800px"
            src={`https://www.youtube.com/embed/${embedurl}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </div>
  );
};

export default Mealdisplay;
