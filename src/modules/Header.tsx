import { Outlet, useNavigate } from "react-router-dom";

const Header = (props: { randomizemeal: () => void }) => {
  const { randomizemeal } = props;
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
            }}
          >
            Home
          </button>

          {/* <Link to="/" style={{ margin: "0px 30px" }}>
            Home
          </Link> */}
        </div>

        <div style={{ width: "80%" }}>
          {/* Temporary Meal Display visible */}
          {/* <Link to="/mealdisplay">Meal</Link> */}
          <button
            onClick={() => {
              randomizemeal();
              navigate("/mealdisplay");
            }}
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              border: "none",
              margin: "0px 30px",
              padding: "0.3rem 0.8rem",
            }}
          >
            Random Meal
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
