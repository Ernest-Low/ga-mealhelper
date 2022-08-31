import { useEffect, useRef, useState } from "react";
import { Jsontype, Recipetype } from "../interfaces";
import saveRecipe from "../modules/saveRecipe";

const Mealsearch = (props: {
  setdisplaylist: (type: Recipetype[]) => void;
}) => {
  const { setdisplaylist } = props;

  const [searchcat, setsearchcat] = useState<string[]>(["Any"]);
  const [searcharea, setsearcharea] = useState<string[]>(["Any"]);

  const [selectedcat, setselectedcat] = useState<string>("Any");
  const [selectedarea, setselectedarea] = useState<string>("Any");

  const namesearch = useRef<HTMLInputElement>(null);
  const radiocategory = useRef<HTMLInputElement>(null);
  const radioarea = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const apicall = async () => {
      console.log("Api call for Category");
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      );
      const json: Jsontype = (await res.json()) as Jsontype;
      json.meals.forEach((obj) => {
        return setsearchcat((prevstate) => [...prevstate, obj.strCategory]);
      });

      console.log("Api call for Areas");
      const res2 = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      const json2: Jsontype = (await res2.json()) as Jsontype;
      json2.meals.forEach((obj) =>
        setsearcharea((prevstate) => [...prevstate, obj.strArea])
      );
    };
    apicall();
  }, []);

  const btnnamesearch = () => {
    if (namesearch.current?.value.trim() == "") {
      alert("Empty field must be filled to search!");
    } else {
      const searchvalue = namesearch.current?.value.trim();
      console.log(namesearch.current?.value);
      const apicall = async () => {
        console.log("Api call for Category");
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchvalue}`
        );
        const json: Jsontype = (await res.json()) as Jsontype;
        // const jsonarray = json.meals.map((obj)=> )
      };
      apicall();
    }
  };

  const btnoptionsearch = () => {
    console.log("Radio for Category");
    console.log(selectedcat);
    console.log("Radio for Area");
    console.log(selectedarea);
  };

  return (
    // Overall page holder
    <div style={{ textAlign: "center" }}>
      <div>
        <h1 className="text-3xl font-bold" style={{ margin: "1rem 0 2rem 0" }}>
          Search
        </h1>
      </div>
      {/* Name Search */}
      <div>
        <input
          className="placeholder-gray-900"
          style={{
            margin: "0 1rem 2rem 0",
            backgroundColor: "#DEB887",
            border: "3px solid #D2691E",
            padding: "0.2rem",
            borderRadius: "1rem 0 0 1rem",
          }}
          ref={namesearch}
          type="text"
          placeholder="Search by Name"
        ></input>
        <button
          onClick={btnnamesearch}
          className="font-bold hover:opacity-50"
          style={{
            backgroundColor: "#DEB887",
            border: "3px solid #D2691E",
            padding: "0.2rem 0.5rem",
            borderRadius: "0 1rem 1rem 0",
          }}
        >
          Search by Name
        </button>
      </div>
      {/* Radios of categories for Search */}
      <div
        style={{
          backgroundColor: "#DEB887",
          margin: "0 3rem",
          borderRadius: "3rem",
        }}
      >
        {/* Search by Category (Radio) */}
        <div>
          <h3 className="font-bold">Search Option (Category)</h3>
          <div>
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "center",
              }}
            >
              {searchcat.map((name, index) => {
                return (
                  <div key={index} style={{ margin: "0 0.3rem" }}>
                    {/* Had to assign any to remove error, hope there's a better method */}
                    <input
                      onClick={(e: any) => {
                        setselectedcat(e.target.id);
                      }}
                      type="radio"
                      id={name}
                      ref={radiocategory}
                      name="categories"
                    ></input>
                    <label htmlFor={name}> {name} </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Search by Area (Radio) */}
        <div>
          <h3 className="font-bold">Search Option (Area)</h3>
          <div>
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "center",
              }}
            >
              {searcharea.map((name, index) => {
                return (
                  <div key={index} style={{ margin: "0 0.3rem" }}>
                    {/* Had to assign any to remove error, hope there's a better method */}
                    <input
                      onClick={(e: any) => {
                        setselectedarea(e.target.id);
                      }}
                      type="radio"
                      id={name}
                      ref={radioarea}
                      name="areas"
                    ></input>
                    <label htmlFor={name}> {name} </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={btnoptionsearch}
        className="font-bold hover:opacity-50"
        style={{
          backgroundColor: "#DEB887",
          border: "3px solid #D2691E",
          padding: "0.2rem 1.2rem",
          borderRadius: "1rem 1rem 1rem 1rem",
          margin: "1rem 0 0.2rem 0",
        }}
      >
        Search Options
      </button>
    </div>
  );
};

export default Mealsearch;
