import { Outlet, useNavigate } from "react-router-dom";

const Header = (props: { randomizemeal: () => void; favmeals: () => void }) => {
  const { randomizemeal, favmeals } = props;
  const navigate = useNavigate();

  return (
    <>
      {/* Header cover */}
      <div
        style={{
          backgroundColor: "#2F4F4F",
          height: "40px",
          color: "ghostwhite",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* Home holder div */}
        <div style={{ width: "20%" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              border: "none",
              margin: "0px 30px",
              padding: "0.3rem 0.8rem",
              fontWeight: "bold",
            }}
          >
            Home
          </button>

          {/* <Link to="/" style={{ margin: "0px 30px" }}>
            Home
          </Link> */}
        </div>

        <div style={{ width: "80%" }}>
          <button
            onClick={() => {
              navigate("/search");
            }}
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              border: "none",
              margin: "0px 30px",
              padding: "0.3rem 0.8rem",
              fontWeight: "bold",
            }}
          >
            Specific Meal
          </button>
          {/* <Link to="/mealdisplay">Meal</Link> */}
          <button
            onClick={() => {
              randomizemeal();
            }}
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              border: "none",
              margin: "0px 30px",
              padding: "0.3rem 0.8rem",
              fontWeight: "bold",
            }}
          >
            Random Meal
          </button>
          <button
            onClick={() => {
              favmeals();
            }}
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              border: "none",
              margin: "0px 30px",
              padding: "0.3rem 0.8rem",
              fontWeight: "bold",
            }}
          >
            Favorite Meals
          </button>
          <button
            onClick={() => {
              navigate("/mealprep");
            }}
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              border: "none",
              margin: "0px 30px",
              padding: "0.3rem 0.8rem",
              fontWeight: "bold",
            }}
          >
            Meal Prep
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
