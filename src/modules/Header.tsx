import { Outlet, Link } from "react-router-dom";

const Header = () => {
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
          <Link to="/" style={{ margin: "0px 30px" }}>
            Home
          </Link>
        </div>

        <div style={{ width: "80%" }}>
          {/* Temporary Meal Display visible */}
          <Link to="/mealdisplay">Meal</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
