import Displaylist from "./Displaylist";
import { Recipetype } from "../interfaces";

const Favoritepage = (props: {
  displaylist: Recipetype[];
  setrecipe: (type: Recipetype) => void;
}) => {
  const { displaylist, setrecipe } = props;

  const displaycheck = () => {
    if (displaylist.length == 0) {
      return (
        <div style={{ textAlign: "center", margin: "3rem" }}>
          <h1 className="text-3xl font-bold">No Favorites Yet</h1>
          <h3 className="text-1xl font-bold">Go and add some!</h3>{" "}
        </div>
      );
    } else {
      return <Displaylist displaylist={displaylist} setrecipe={setrecipe} />;
    }
  };

  return (
    <>
      <div style={{ textAlign: "center", margin: "2rem" }}>
        <h1
          style={{ fontFamily: "Yeseva" }}
          className="text-3xl font-bold underline italic"
        >
          Favorite Meals
        </h1>
      </div>
      {/* Display list holder */}
      <div>{displaycheck()}</div>
    </>
  );
};

export default Favoritepage;
